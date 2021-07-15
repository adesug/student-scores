
const mainRoutes = require('express').Router();
const nilaiRoutes = require("./nilaiRoutes");

mainRoutes.use('/api/student-scores', nilaiRoutes);

module.exports=mainRoutes;