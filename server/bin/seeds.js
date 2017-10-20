const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://localhost/new-project-db', {
  useMongoClient: true
}).then(() => {
  console.info('Succesfully connected to database')
})

function disconnect() {
  mongoose.connection.close().then(() => {
    console.info('Succesfully disconnected from database')
  })
}

const users = [{
  username: 'Toto',
  password: 'azerty'
}]

User.remove({})
  .then(() => {
    return User.create(users)
  })
  .then(disconnect)
