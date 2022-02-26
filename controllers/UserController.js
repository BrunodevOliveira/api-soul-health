const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


module.exports = class userController {
 
    // metodo de registro de usuario
    static async registerUser(req, res){
   
        const { email, password } = req.body;

        //validação de campos 
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
        const user = User({email, password: passwordHash});

        await user.save();

        const secret = process.env.SECRET
        const token = jwt.sign({id: user._id,},secret,)

        res.status(200).json({token})


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
            return res.status(422).json({message: 'invalid password'})
        }

        try{

            const secret = process.env.SECRET
            const token = jwt.sign({
                id: user._id,
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
    return res.status(200).json(users)

   }
     // metodo de edição de usuario
   static async updateuser(req, res){

    const { id, email, password  } = req.body;
    await User.findByIdAndUpdate(id, { email, password })

    return res.status(200).json({message: 'user updated successfully'})

   }
   // metodo para deletar o usuario
   static async deleteUser(req, res){

    const { id } = req.body;

    await User.findByIdAndDelete(id);

    return res.status(200).json({message: 'deleted user'})

   }

 }


