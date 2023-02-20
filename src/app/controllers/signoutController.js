const { auth } = require('../../config/firebaseAuth')
const { signOut } = require('firebase/auth')
class CoursesController {
      async index(req, res) {
            signOut(auth).then(() => {
                  res.clearCookie('userInfo').redirect('/')
            }).catch((error) => {
                  res.render('home')
            });
      }
}

module.exports = new CoursesController