const bodyParser = require('./node_modules/body-parser'),
  express = require('./node_modules/express'),
  { checkToken } = require('./middleware/checkToken')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port = 3030, () => {
  console.log(require('./node_modules/jsonwebtoken').sign({data: null}, 'YOUR_SECRET'))
  console.log('listening at %s', port)
})

app.post('/messaging/flowai/webhook', checkToken, (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})