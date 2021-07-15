const nilaiRoutes = require('express').Router();
const nilaiController = require('../controllers/nilaicontroller');

nilaiRoutes.get('/', nilaiController.getAllNilai);
nilaiRoutes.post('/', nilaiController.createNewNilai);
nilaiRoutes.get('/:id', nilaiController.getNilaiId);
nilaiRoutes.put('/:id', nilaiController.updateNilai);
nilaiRoutes.delete('/:id', nilaiController.deleteDataNilai);

module.exports = nilaiRoutes;