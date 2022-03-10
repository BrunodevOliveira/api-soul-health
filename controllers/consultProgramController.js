const Program = require('../models/Program')

module.exports = class ConsultProgramController {

    // metodo para mostrar consultas de um determinado usuario, selecionado pelo email.
    static async  showConsults (req, res) {
        
        const  email  = req.params.email

        const user = await Program.find({email:email})

        return res.status(200).json(user)

    }

    //Metodo para atualizar  informações, usando email como referencia de usuario
    static async updateconsult(req, res){

        const id = req.params.id

        const { specialty, date } = req.body;

        await Program.findByIdAndUpdate(id, {specialty, date})

        return res.status(200).json({message: 'consult updated successfully'})

    }
    // metodo para deletar consulta, usando como referencia o email
    static async deleteConsult(req, res){

        const id = req.params.id

        await Program.findByIdAndDelete(id)

        return res.status(200).json({message: 'deleted consult'})

    }



}
