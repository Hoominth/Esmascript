const { Auth, Accounts } = require('../../config/firebase')
class SigninController {
      index(req, res) {
            res.render('signin')
      }
      login(req, res) {
            const { email, password } = req.body
            Auth
                  .getUserByEmail(email)
                  .then(async (userRecord) => {
                        const account = await Accounts.doc(userRecord.uid).get()
                        const userInfo = {
                              userUid: userRecord.uid,
                              userName: userRecord.displayName,
                              userEmail: userRecord.email.split('@')[0],
                              userImage: userRecord.photoURL || "https://www.rlmillerllc.com/wp-content/uploads/2017/07/default-user-image.png",
                              userRole: account.data().role
                        }
                        res.cookie('userInfo', userInfo).redirect('/')
                  })
                  .catch((error) => {
                        res.render('/signin')
                        console.log('Error fetching user data:', error);
                  });
      }
}

module.exports = new SigninController