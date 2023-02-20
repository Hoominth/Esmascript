const { initializeApp } = require('firebase/app')
const { getAuth } = require('firebase/auth')
const firebaseConfig = {
      apiKey: "AIzaSyDVkxV19Es8nsvXQFZUoV5cVlrmdV8LRRY",
      authDomain: "ecmascript-asm-f48a1.firebaseapp.com",
      databaseURL: "https://ecmascript-asm-f48a1-default-rtdb.firebaseio.com",
      projectId: "ecmascript-asm-f48a1",
      storageBucket: "ecmascript-asm-f48a1.appspot.com",
      messagingSenderId: "385413399692",
      appId: "1:385413399692:web:4088a17d1af4d71cbe67a9"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const defaultAuth = getAuth()
module.exports = { auth, defaultAuth }