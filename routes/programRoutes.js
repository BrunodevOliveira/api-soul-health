const { Router } = require('express')
const ProgramController = require('../controllers/ProgramController')
const router = Router()

router.post('/webhook',ProgramController.program)

module.exports = router