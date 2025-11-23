const express = require('express');

const router = express.Router();

const {createquotes} = require('../controller/createquotes');
const {subscribeController} = require('../controller/subscribeController');
const {getQuotes} = require('../controller/getquotes');
const {addMultipleQuotes} = require('../controller/addMultipleQuotes');

router.post('/createquote',createquotes);
router.post('/subscribe',subscribeController);
router.get('/getquote',getQuotes);
router.post('/addmultiplequotes',addMultipleQuotes);

module.exports = router;