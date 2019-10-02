const express = require('express'); //miniFramework
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://semanaomnistack:semanaomnistack@cluster0-npoar.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Get, post, put, delete

//req.query = para passar parametros (para Filtros)
//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);
