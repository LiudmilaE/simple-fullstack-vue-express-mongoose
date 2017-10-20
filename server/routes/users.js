const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  const user = new User({
    username: req.body.username,
    password: req.body.password 
  })
  user.save().then(savedUser => {
    res.json(savedUser)
  })
})

module.exports = router