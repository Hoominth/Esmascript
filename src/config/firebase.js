const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth')

const serviceAccount = require('./serviceAccount.json');

initializeApp({
      credential: cert(serviceAccount)
});
const db = getFirestore();
const Accounts = db.collection('accounts')
const Courses = db.collection('courses')
const Auth = getAuth()


module.exports = { Courses, Accounts, Auth }  