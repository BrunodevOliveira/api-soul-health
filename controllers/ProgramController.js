const Program = require('../models/Program')
const User = require("../models/User");
const { WebhookClient, Card } = require('dialogflow-fulfillment'); 


class ProgramController {

    static program(req, res) {

        const agent = new WebhookClient({ request: req, response: res });

        function welcome(agent) {
            agent.add(`Rodando do Webhook`);
        }

        function convertDate(date) {

            if(typeof date === 'object') {
               const dateConvert =  date.date_time ?? date.endDateTime 
               return dateConvert.split('T')[0].split("-").reverse().join("/")
            }

            if(typeof date === 'string') {
                const dateConvert = date
                return dateConvert.split('T')[0].split("-").reverse().join("/")
            }
        }

        function querys() {
            return {
                specialty:  req.body.queryResult.parameters['especialidade'],
                changeSpecialty: req.body.queryResult.parameters['alterar-especialidade'],
                dateParameter: req.body.queryResult.parameters['data-agendamento'],
                email: req.body.queryResult.parameters['email'],
                specialtyContext: req.body.queryResult.outputContexts[0].parameters['alterar-especialidade'],
                emailContext: req.body.queryResult.outputContexts[0].parameters['email']
            }
        }

        async function addConsult(agent) {

            //Capturando os dados que o usuário inseriu
            let { specialty, dateParameter, email } = querys()
            specialty = specialty.toLowerCase()

            const date = convertDate(dateParameter)

            const existingUserEmail = await User.findOne({ email: `${email}` })

            if(!existingUserEmail) {
               return agent.add(`Informe o email de usuário correto`)
            }

            const consult = Program({ specialty, date, email })

            await consult.save()
            agent.add(`Consulta com o ${specialty} foi adicionada a sua agenda para o dia ${date}.`);
        }

        async function deleteConsult(agent) {

            let { specialty, dateParameter, email } = querys()
            specialty = specialty.toLowerCase()

            const date = convertDate(dateParameter)

            await Program.findOneAndDelete({ specialty: `${specialty}`, date: `${date}`, email: `${email}`}).lean()

            agent.add(`Prontinho, sua consulta com  ${specialty} agendada para o dia ${date} foi desmarcada. 😁`);
        }

        async function findConsult(agent) {

            let { specialty, email } = querys()
            specialty = specialty.toLowerCase()

            const date =  await Program.findOne({ specialty: `${specialty}`, email: `${email}`})

            agent.add(`Sua consulta com ${date.specialty} está agendada para ${date.date}`);
        }

        async function editConsult(agent) {

            let { changeSpecialty, email } = querys()
            changeSpecialty = changeSpecialty.toLowerCase()

            const consult = await Program.findOne({ specialty: `${changeSpecialty}`, email: `${email}`})

            agent.add(`Deseja alterar a consulta com ${consult.specialty} marcada para ${consult.date}?`);
        }

        async function editConsultAndUpdate(agent) {

            let { specialty, dateParameter, specialtyContext, emailContext } = querys()
            specialtyContext = specialtyContext.toLowerCase()
            specialty = specialty.toLowerCase()

            const date = convertDate(dateParameter)

            await Program.findOneAndUpdate(
                { specialty: `${specialtyContext}`, email: `${emailContext}` },
                { specialty: `${specialty}`, date: `${date}` }
            )
            
            agent.add(`Prontinho! Já alteramos sua consulta! 😉`);
        }

        let intentMap = new Map();
        intentMap.set('Default Welcome Intent', welcome);
        intentMap.set('agendamento.consultas', addConsult);
        intentMap.set('cancelar.consulta', deleteConsult);
        intentMap.set('pesquisar.consulta', findConsult);
        intentMap.set('atualizar.consulta', editConsult);
        intentMap.set('atualizar.consulta - yes', editConsultAndUpdate);

        agent.handleRequest(intentMap);
    }
}

module.exports = ProgramController