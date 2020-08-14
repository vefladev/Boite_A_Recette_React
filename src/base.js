import Rebase from 're-base'
import firebase from '@firebase/app'
import '@firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACdKKeinOS6fTq8QIBMxCFAuJ2mv8JZXU",
    authDomain: "boite-a-recette-react-20209.firebaseapp.com",
    databaseURL: "https://boite-a-recette-react-20209.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())



// This is a named export
export { firebaseApp }

// this is a default export
export default base
 