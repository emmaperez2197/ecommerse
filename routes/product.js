const { Router }= require('express')

const router = Router()

const { create } = require('../controllers/products/create')



router.post('/', create)


module.exports = router;