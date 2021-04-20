const express = require('express')
const cors = require('cors')
const sequelize = require('./config/database')
const bodyParser=require('body-parser')


const app = express()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT =  5000 

testConnection = async ()=> {
try {
   await sequelize.authenticate()
}catch(err) {
  console.log(err)
}
}

testConnection()


app.use('/baskets', require('./routes/basket.routes'))
app.use('/fruits', require('./routes/fruit.routes'))


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

