const { Router } = require("express");
const router = Router()
const ConsultProgramController = require("../controllers/consultProgramController");

router.get('/showconsults/:email', ConsultProgramController.showConsults)

router.post('/updateconsult/:id', ConsultProgramController.updateconsult)

router.delete('/deleteconsult/:id', ConsultProgramController.deleteConsult)

module.exports = router;