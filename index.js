const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//heroku won't always use port 5000
const PORT = process.env.PORT || 5000

const app = express()
// const DB_URL = "mongodb://localhost:27017/lasagne-app-db" //need to replace with correct url
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true }

//set up mongoose
mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
  if (err) {
    console.log('error - what have you done?!')
  } else {
    console.log('connected to db!')
  }
})

// TODOconnect with the index.js file in the routes directory
app.use(require('./routes/index'))


app.listen(PORT, () => console.log(`listening on port ${PORT}`))