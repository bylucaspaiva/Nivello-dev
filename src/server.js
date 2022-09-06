const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT; //porta padrão

app.use(express.json());

const router = require('./routes');

app.use(router);

app.get('', (req, res, next) => {
  return res.json({message: "success 👍"});
})

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 👍`);
});
