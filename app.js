//Load express module with `require` directive
var express = require('express')
var app = express()
const welcome = "Welcome "
const meet = "Let's meet sometime tomorrow, "

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('This is a dummy Welcome app.')
})

app.get('/api/greet/:id', function (req, res) {
  res.send(welcome.concat(req.params.id))
})

app.get('/api/meet/:id', function (req, res) {
  res.send(meet.concat(req.params.id))
})

//Launch listening server on port 8080
app.listen(8083, function () {
  console.log('app listening on port 8083!')
})