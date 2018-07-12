const express =  require('express')
const path = require('path')

var router = express.Router();
const login = require(path.join(__dirname,'../controlls/accountCtro.js'))
router.get('/login',login.getLogin)
router.get('/vcode',login.getCode)

module.exports = router;