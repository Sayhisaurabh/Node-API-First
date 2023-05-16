const express = require('express')
const router = express.Router();
const  { register ,users }   = require('../controller/register')

router.post('/register',register);
router.get('/users',users);
module.exports = router;