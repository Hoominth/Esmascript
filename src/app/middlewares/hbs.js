const { engine } = require('express-handlebars')
const { join } = require('path')

const hbs = app => {
      app.engine('hbs', engine({ extname: 'hbs' }))
      app.set('view engine', 'hbs')
      app.set('views', join(__dirname, '../views'))
}

module.exports = hbs
