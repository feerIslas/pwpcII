var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Luis Islas', appName:'Web de Feer' });
});

// Agregando nueva ruta
router.get('/greeting', function(req, res, next){
  res.send('Hola infeliz, hasta que haces algo')
})
module.exports = router;
