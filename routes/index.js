const { Router } = require('express')
const programRoutes = require('./programRoutes')
const userRoutes = require('./userRoutes')
const consultRoutes = require('./consultRoutes')

const router = Router()

router.use(programRoutes)
router.use(userRoutes)
router.use(consultRoutes)

module.exports = router