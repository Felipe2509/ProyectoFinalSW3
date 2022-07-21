const express = require('express');
const router = express.Router();
const controllerDocente = require('./docente/controllers/docenteController');

router.get('/bienvenida', (req, res)=>{
    res.render('bienvenida');
});
router.get('/', controllerDocente.listarDocentes);
router.get('/addDocente', controllerDocente.addDocente);
router.post('/saveDocente', controllerDocente.saveDocente);
router.get('/editDocente/:DOCENTE_ID', controllerDocente.editDocente);
router.post('/editDocente/:DOCENTE_ID', controllerDocente.updateDocente);
router.get('/stateDocente/:DOCENTE_ID', controllerDocente.stateDocente);

module.exports = router;