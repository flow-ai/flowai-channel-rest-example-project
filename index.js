const bodyParser = require('./node_modules/body-parser'),
  express = require('./node_modules/express'),
  { checkToken } = require('./middleware/checkToken')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port = 3030, () => {
  console.log('listening at %s', port)
})

app.post('/messaging/flowai/webhook', checkToken, (req, res) => {
  const {
    threadId,
    messages
  } = req.body

  const YOUR_THREAD_ID = threadId.split('|')[0]

  messages.forEach(message => {
    message.responses.forEach(response => {
      /**
       * Here you can save the messages
       */
    })
  })

  res.sendStatus(200)
})