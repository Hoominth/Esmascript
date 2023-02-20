const express = require('express')
const { join } = require('path')
const { urlencoded, json } = require('body-parser')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const route = require('./routes')
const cookieParser = require('cookie-parser')
const app = express()
const hbs = require('./app/middlewares/hbs')

app.use(cookieParser())
app.use(cors())
/* Setting bodyparser with form & json */
app.use(urlencoded({ extended: true }))
app.use(json())

/* Set up static file */
app.use(express.static(join(__dirname, 'public')))
/* handlebars  */
hbs(app)
/* Router  */
route(app)


app.listen(process.env.PORT || 8080, () =>
      console.log(`App to listener on PORT http://localhost:${process.env.PORT || 8080}`))