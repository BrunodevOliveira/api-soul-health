const Program = require('../models/Program')

module.exports = class ConsultProgramController {

    // metodo para mostrar consultas de um determinado usuario, selecionado pelo email.
    static async  showConsults (req, res) {
        
        const  email  = req.params.email

        if(!email){
            return res.status(400).json({message: 'user not found'}) 
        }

        const user = await Program.find({email:email})

        return res.status(200).json(user)

    }

    //Metodo para atualizar  informações, usando email como referencia de usuario
    static async updateconsult(req, res){

        const id = req.params.id

        const { specialty, date } = req.body;

        if(specialty && date){

            try{

                await Program.findByIdAndUpdate(id, {specialty, date})

                return res.status(200).json({message: 'consult updated successfully'})
        
            }catch(err){
                res.status(404).json({ message: "consult not found" });
            } 
        }else {

            res.status(400).json({ message: "Required fields" });

        }



    }
    // metodo para deletar consulta, usando como referencia o email
    static async deleteConsult(req, res){

        const id = req.params.id

        try {
            await Program.findByIdAndDelete(id)

            return res.status(200).json({message: 'deleted consult'})
        } catch (err) {
            
            res.status(404).json({ message: "consult not found" });
        }

      }

 }




