const { Courses, Accounts } = require('../../config/firebase')
const { Timestamp } = require('firebase-admin/firestore');

class AdminController {
      async coursesRead(req, res) {
            const userInfo = req.cookies.userInfo
            const snapshot = await Courses.get()
            const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            const countCourses = await Courses.count().get()
            const countAccounts = await Accounts.count().get()
            res.render('admin', {
                  layout: false,
                  courses,
                  userInfo,
                  countCourses: countCourses.data().count,
                  countAccounts: countAccounts.data().count
            })
      }
      async coursesReadUpdate(req, res) {
            const id = req.params.id
            let course;
            if (id !== null) {
                  const courseRef = Courses.doc(id)
                  const doc = await courseRef.get()
                  course = { id, ...doc.data() }
            }
            res.render('edit', { layout: false, course })
      }
      async handleCoursesUpdate(req, res) {
            const courseInfo = req.body
            const currentDate = Timestamp.fromDate(new Date()).toDate().toLocaleString("vi-VI")
            if (req.files.image) {
                  const image = req.files.image[0].filename
                  await Courses.doc(courseInfo.courseId).update({
                        image: image,
                        name: courseInfo.name,
                        details: {
                              desc: courseInfo.desc,
                              level: courseInfo.level
                        },
                        userCount: courseInfo.userCount,
                        slug: courseInfo.slug,
                        isPaid: courseInfo.chooseCourse,
                        priceOld: courseInfo.priceOld,
                        priceMain: courseInfo.priceMain,
                        updatedAt: currentDate,
                        createdAt: currentDate,
                  })
                  res.redirect('back')
            } else {
                  const updateI = req.body.imageUpdate
                  await Courses.doc(courseInfo.courseId).update({
                        image: updateI,
                        name: courseInfo.name,
                        details: {
                              desc: courseInfo.desc,
                              level: courseInfo.level
                        },
                        userCount: courseInfo.userCount,
                        slug: courseInfo.slug,
                        isPaid: courseInfo.chooseCourse,
                        priceOld: courseInfo.priceOld,
                        priceMain: courseInfo.priceMain,
                        updatedAt: currentDate,
                        createdAt: currentDate,
                  })
                  res.redirect('back')
            }
      }
      coursesReadCreate(req, res) {
            res.render('create', {
                  layout: false,
            })
      }
      async handleCoursesCreate(req, res) {
            const courseInfo = req.body
            const image = req.files.image[0].filename
            const currentDate = Timestamp.fromDate(new Date()).toDate().toLocaleString("vi-VI")
            await Courses.add({
                  image: image,
                  name: courseInfo.name,
                  details: {
                        desc: courseInfo.desc,
                        level: courseInfo.level
                  },
                  userCount: courseInfo.userCount,
                  slug: courseInfo.slug,
                  isPaid: courseInfo.chooseCourse,
                  priceOld: courseInfo.priceOld,
                  priceMain: courseInfo.priceMain,
                  updatedAt: currentDate,
                  createdAt: currentDate,
            })
            res.redirect('/admin')
      }
      async courseDelete(req, res) {
            const snapshot = await Courses.get()
            const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            courses.forEach(course => {
                  if (course.id === req.params.id) {
                        Courses.doc(req.params.id).delete();
                  }
            })
            res.redirect('back')
      }
}

module.exports = new AdminController