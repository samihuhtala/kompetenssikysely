import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB5vqwusAIVlRNqDhNHTej34XqO6g5jCwA",
    authDomain: "surveydev-740fb.firebaseapp.com",
    databaseURL: "https://surveydev-740fb.firebaseio.com",
    projectId: "surveydev-740fb",
    storageBucket: "surveydev-740fb.appspot.com",
    messagingSenderId: "22198431343"
  }
  var fire = firebase.initializeApp(config)

export default fire


/*var config = {
    apiKey: "AIzaSyD4xO0rJiyRqzpTNfsElwA6gL85ctmwN4g",
    authDomain: "survey-87fc3.firebaseapp.com",
    databaseURL: "https://survey-87fc3.firebaseio.com",
    projectId: "survey-87fc3",
    storageBucket: "survey-87fc3.appspot.com",
    messagingSenderId: "805532426722"
  }*/
