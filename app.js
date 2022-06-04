const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    number: 1,
    nama: 'Audya Ramanda Putra',
    npm: '2042017'
  });
})

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});