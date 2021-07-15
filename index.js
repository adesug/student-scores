require('dotenv').config({});
const express = require('express');
var cors = require('cors')
const mainRoutes = require('./src/routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', mainRoutes);


app.listen(port, () => {
    console.log("server running");
})