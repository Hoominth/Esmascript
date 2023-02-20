const { Courses } = require('../../config/firebase')

class CoursesController {
      async detail(req, res) {
            const userInfo = req.cookies.userInfo
            const slug = req.params.slug
            const snapshot = await Courses.get();
            let courseDetail;
            let whatLearn;
            let require;
            snapshot.forEach(doc => {
                  if (doc.data().slug === slug) {
                        courseDetail = doc.data()
                        whatLearn = doc.data().details.whatLearn
                        require = doc.data().details.require
                  }
            });
            res.render('detail', {
                  userInfo,
                  courseDetail,
                  whatLearn,
                  require
            })
      }
}

module.exports = new CoursesController