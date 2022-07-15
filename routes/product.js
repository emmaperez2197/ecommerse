const { Router } = require('express');

const router = Router();

const { create } = require('../controllers/products/create');
const { findProducts } = require('../controllers/products/find');
const {findByIdProduct} = require('../controllers/products/findByid')

const validateCreate = require('../middlewares/actions/product');
// const validateId = require('../middlewares/actions/validateId')

router.post('/', validateCreate, create);
router.get('/', findProducts);
router.get('/:id', findByIdProduct);

module.exports = router;
