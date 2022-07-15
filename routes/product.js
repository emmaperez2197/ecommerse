const { Router } = require('express');

const router = Router();

const { create } = require('../controllers/products/create');
const { findProducts } = require('../controllers/products/find');

const validateCreate = require('../middlewares/actions/product');

router.post('/', validateCreate, create);
router.get('/', findProducts);

module.exports = router;
