const { Router } = require('express');
const { pruebaGet, pruebaPost, pruebaPut, pruebaDelete } = require('../controllers/pruebas.controller');
const router = Router();


router.get('/', pruebaGet);

router.post('/', pruebaPost);

router.put('/', pruebaPut);

router.delete('/', pruebaDelete);

module.exports = router;