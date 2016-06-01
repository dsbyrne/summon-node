var express = require('express');
var app = express();

var verify = function(varName) {
  return typeof process.env[varName] === 'undefined' ?
    varName + ' does not exist in the environment!\n' : 
    varName + ' exists in the environment!\n';
}

app.get('/', function(req, res) {
  res.send(verify('API_KEY')     +
           verify('PRIVATE_KEY') +
           verify('DATABASE_PASSWORD'));
});

app.listen(process.env.PORT || 8080);
