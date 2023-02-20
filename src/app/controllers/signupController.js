const { Auth, Accounts } = require('../../config/firebase')
const { Timestamp } = require('firebase-admin/firestore')

class SignupController {
      index(req, res) {
            res.render('signup')
      }
      create(req, res) {
            const { password, username, email } = req.body
            Auth
                  .createUser({
                        email: email,
                        password: password,
                        displayName: username,
                        disabled: false,
                  })
                  .then(async (userRecord) => {
                        await Accounts.doc(userRecord.uid).set({
                              uid: userRecord.uid,
                              email: userRecord.email,
                              emailVerified: userRecord.emailVerified,
                              displayName: userRecord.displayName,
                              disabled: userRecord.disabled,
                              createAt: Timestamp.fromDate(new Date()),
                              updateAt: Timestamp.fromDate(new Date()),
                        })
                        res.redirect('/signin')
                  })
                  .catch((error) => {
                        res.render('signup')
                        console.log('Error creating new user:', error);
                  });
      }
}

module.exports = new SignupController