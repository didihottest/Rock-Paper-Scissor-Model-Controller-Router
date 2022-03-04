require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./models')
const router = require('./router')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)


const PORT = process.env.PORT || 5000

db.sequelize.sync({
  // force: true
}).then(() => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is Running at port ${PORT}`);
    console.log('====================================');
  })
}).catch((error) => {
  console.log(error);
})

