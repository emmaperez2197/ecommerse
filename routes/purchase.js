const { Router} = require('express');

const router = Router();

const {traerCompras} = require('../controllers/purschase/compra');

router.get('/', traerCompras)


module.exports = router;
