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
  res.send('do something, please');
});

router.post('/', function(req, res, next) {
  const username = req.param('username');
  const password = req.param('password');
  if (!username || !password) {
    res.status(401).json({
      success: false,
      error: 'username and password must be supplied',
    });
    return;
  }

  connection.query('INSERT INTO USERS (username) VALUES (?)', [username], function(error, results, fields) {
    if (error) {
      res.status(401).json({
        success: false,
        error: 'invalid options - user may already exist',
      });
    }
    res.json({
      id: results.insertId,
    });
  });
});

router.get('/list', function(req, res, next) {
  connection.query('SELECT username, id FROM users', [], function(error, results, fields) {
    if (error) {
      res.status(500).json({
        success: false,
        error: 'database error',
      });
    }
    res.json(results);
  });
});

router.post('/login', function(req, res, next) {
  const username = req.param('username');
  const password = req.param('password');
  if (!username || !password) {
    res.status(401).json({
      success: false,
      error: 'username and password must be supplied',
    });
    return;
  }

  connection.query('SELECT id FROM users WHERE username = ?', [username], function(error, results, fields) {
    if (error) {
      res.status(401).json({
        success: false,
        error: 'user does not exist',
      });
    }
    res.json({
      id: results[0].id,
    });
  });
});

module.exports = router;
