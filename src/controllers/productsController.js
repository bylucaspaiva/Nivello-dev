const Products = require('./../database/products');
const productsConnection = require('./../database/productsConnection');

module.exports = {
  async create(req, res) {
    const {nome, valor, foto} = req.body.data;
    console.log(nome, valor, foto);

    try {
      const resultado = await productsConnection.sync();
      console.log(resultado);
    } catch (error) {
      // console.log(error);
    }

    const resultadoCreate = await Products.create({
      nome: nome,
      valor: valor,
      foto: foto
    })
    console.log(resultadoCreate);

    return res.json(resultadoCreate);
  }, 

  async list(req, res) {
    const products = await Products.findAll();
    console.log(products);
    return res.json(products);
  }
}