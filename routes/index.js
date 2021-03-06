const { signedCookies } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const publicationController = require('../controllers/publicationController');

router.get('/', async function(req, res) {
  var userLogged = req.user
  if(!userLogged) {
    res.redirect('/user/login')
  } else {
    const publications = await publicationController.getAllPublications()
    res.render('index', userLogged);
  }
});

module.exports = router;
