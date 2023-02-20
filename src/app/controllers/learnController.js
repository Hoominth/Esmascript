class learnController {
      slug(req, res) {
            const userInfo = req.body.userInfo
            res.render('learn')
      }
}

module.exports = new learnController