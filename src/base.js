import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3HHP0_FkJPi2IMOZJHBHsnSq0RLmqF5o",
    authDomain: "chatbox-app-4786a.firebaseapp.com",
    databaseURL: "https://chatbox-app-4786a.firebaseio.com"
})


const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base


