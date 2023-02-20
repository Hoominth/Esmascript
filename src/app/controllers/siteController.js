const { Courses } = require('../../config/firebase')

class SiteController {
      async index(req, res) {
            const userInfo = req.cookies.userInfo
            const snapshot = await Courses.get()
            const courseFree = {}
            const coursePro = {}
            snapshot.forEach(doc => {
                  doc.data().isPaid == 'false' ?
                        courseFree[doc.id] = doc.data() :
                        coursePro[doc.id] = doc.data()
            })
            res.render('home', {
                  COURSES: JSON.stringify(courseFree),
                  userInfo,
                  courseFree,
                  coursePro
            })
      }
      detail(req, res) {
            res.render('detail', {
                  userInfo
            })
      }
}

module.exports = new SiteController