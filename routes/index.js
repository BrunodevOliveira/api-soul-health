const { Router } = require('express')
const programRoutes = require('./programRoutes')
const userRoutes = require('./userRoutes')

const router = Router()

router.use(programRoutes)
router.use(userRoutes)

module.exports = router