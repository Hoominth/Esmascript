const siteRouter = require('./site')
const adminRouter = require('./admin')
const signinRouter = require('./signin')
const signupRouter = require('./signup')
const signoutRouter = require('./signout')
const coursesRouter = require('./courses')
const learnRouter = require('./learn')
const route = app => {
      app.use('/signin', signinRouter)
      app.use('/signup', signupRouter)
      app.use('/signout', signoutRouter)
      app.use('/admin', adminRouter)
      app.use('/courses', coursesRouter)
      app.use('/learning', learnRouter)
      app.use('/', siteRouter)
}

module.exports = route