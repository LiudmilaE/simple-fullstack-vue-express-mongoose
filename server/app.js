const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const usersController = require('./routes/users')

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: false }))
apiRouter.use(bodyParser.json())
apiRouter.use('/users', usersController)

mongoose.connect('mongodb://localhost/new-project-db', {
  useMongoClient: true
}).then(() => {
  console.info('Succesfully connected to database')
})

const app = express()

app.use(cors())

app.use('/api', apiRouter)

module.exports = app