const router = require('express').Router();
const productsRoutes = require('./products.routes');
const userRoutes = require('./user.routes')

router.use('/users', userRoutes);
router.use('/products', productsRoutes);

module.exports = router;