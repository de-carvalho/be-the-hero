const express = require('express'); // importanto funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express(); // variavél para armazenar aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // aplicação ouve a porta 3333