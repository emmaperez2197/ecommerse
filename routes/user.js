const  { Router } = require('express');

const router = Router()

const { registrar } = require('../controllers/login/registrar')

const {validateRegistro} = require('../middlewares/actions/registro')
 
router.post('/create', validateRegistro, registrar);

module.exports = router
