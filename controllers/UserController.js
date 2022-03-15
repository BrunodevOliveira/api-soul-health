const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


module.exports = class userController {
 
    
    // metodo de registro de usuario
    static async registerUser(req, res){
    
            const { name, cpf, phone, email, password } = req.body;
            //validação de campos.

            if(!name || name == null || name == ''){
                return res.status(422).json({message: 'empty nome field'})
            }
            if(!cpf || cpf == null || cpf == ''){
                return res.status(422).json({message: 'empty cpf field'})
            }
            if(!phone || phone == null || phone == ''){
                return res.status(422).json({message: 'empty phone field'})
            }
            if(!email || email == null || email == ''){
                return res.status(422).json({message: 'empty email field'})
            } 
            if(!password || password == null || password == ''){
                return res.status(422).json({message: 'empty password field'})
            }
    
            // impossibilitando duplicação de usuario no banco de dados
            const emailExists = await User.findOne({email: email})
            if(emailExists){
                return res.status(422).json({message: 'existing email'})
            }
            //metodo para encriptação de senha
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)
            // criando um novo usuario e token
            const user = User({name, cpf, phone, email, password: passwordHash});

            await user.save();

            res.status(200).json({message: "registered user"})

    }
    // metodo de login
    static async loginUser(req, res){
    
        const { email, password } = req.body;

        //validação de campos 
        if(!email || email == null || email == ''){
            return res.status(422).json({message: 'empty email field'})
        }

        if(!password || password == null || password == ''){
            return res.status(422).json({message: 'empty password field'})
        }

        //checkando se o usuario existe 
        const user = await User.findOne({email: email})
        if(!user){
        return res.status(404).json({message: 'User not found'})
        }
        //checkando se a senha esta correta e geração de token de autenticação
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword){
            return res.status(401).json({message: 'invalid password'})
        }

        try{

            const secret = process.env.SECRET
            const token = jwt.sign({
                id: user._id, email: user.email,
            },
            secret,
            )

            res.status(200).json({message:"successful authentication", token })
        
        }catch(err){
            console.log(err)
            res.status(400).json({message: `an error occurred on the server: ${err}` })
        }


    }
    // trás uma lista com todos os usuarios cadastrados
    static async showUsers(req, res){
        
        const users = await User.find({raw:true})
        if(!users || users == null || users == ''){
            return res.status(400).json({message: "no registered users"})
        }
        return res.status(200).json(users)

    }
    // trás um usuario especifico ( dono do id)
    static async findOneUser(req, res){
        
        const  id  = req.params.id
        
        if(!id){
            res.status(404).json({ message: "user not found" });
        }
        const user = await User.findOne({_id:id})
        return res.status(200).json(user)
       
    }
    // metodo de edição de usuario
    static async updateuser(req, res) {
        
        const {id} = req.params

        const {name, cpf, phone, email } = req.body;
        if(name && cpf && phone && email){
            try{
        
        await User.findByIdAndUpdate(id, { name, cpf, phone, email })

        return res.status(200).json({message: 'user updated successfully'})
        } catch(err){

            res.status(404).json({ message: "User not found" });

        }

        }else {

            res.status(400).json({ message: "Required fields" });

        }

    }
    // metodo para deletar o usuario
    static async deleteUser(req, res){
        const { id } = req.params;
        try {
            await User.findByIdAndDelete(id);
            return res.status(200).json({message: 'deleted user'})
          } catch (err) {
            res.status(404).json({ message: "User not found" });
          }

    }

    

}


