const Users = require('./../database/users');
const userConnection = require('./../database/userConnection');

module.exports = {
  async create(req, res) {
    const {nome, idade} = req.body.data;
    console.log(nome, idade);

    try {
      const resultado = await userConnection.sync();
    } catch (error) {
      console.log(error);
    }
    const resultadoCreate = await Users.create({
      nome: nome,
      idade: idade
    })
    console.log(resultadoCreate);

    return res.json(resultadoCreate);
  }, 

  async list(req, res) {
    const users = await Users.findAll();
    console.log(users);
    return res.json(users);
  }
  
}
