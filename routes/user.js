const { Router } = require('express');

const router = Router();

const { registrar } = require('../controllers/login/registrar');
const { login } = require('../controllers/login/login') 

const { validateRegistro } = require('../middlewares/actions/registro');

router.post('/registrar', validateRegistro, registrar);
router.post('/login', login);

module.exports = router;
