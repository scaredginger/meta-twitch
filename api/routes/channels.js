const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'meta',
  password : process.env.META_PASSWORD,
  database : 'meta'
});

connection.connect();

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(401).send('do something, please');
});

router.get('/list', function(req, res, next) {
  connection.query('SELECT name, id FROM channels', [], function(error, results, fields) {
    if (error) {
      res.status(500).json({
        success: false,
        error: 'database error',
      });
    }
    res.json(results);
  });
});

router.get('/channels/info/:channelId', function(req, res, next) {
  const id = req.param('channelId');
  if (!id) {
    res.status(401).json({
      success: false,
      error: 'channel id was not specified',
    });
  }
  connection.query('SELECT ', [], function(error, results, fields) {
    if (error) {
      res.status(500).json({
        success: false,
        error: 'database error',
      });
    }
    res.json(results);
  });
});

module.exports = router;
