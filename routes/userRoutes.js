// definição das rotas  do aplicativo (URIs) e como eles respondem às solicitações do cliente. 
const { Router } = require("express");
const userController = require("../controllers/UserController");

const router = Router();


router.post('/signup', userController.registerUser)
router.post('/signin', userController.loginUser)
router.get('/show', userController.showUsers)
router.post('/delete', userController.deleteUser)
router.post('/update', userController.updateuser)


module.exports = router;