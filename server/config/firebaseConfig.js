const firebase = require('firebase');
const firebaseConfig = {
	apiKey: "AIzaSyAkk0YArj4SoR9nKfKy4cqw8EDwbBA43CU",
	authDomain: "reactproject-4a1d6.firebaseapp.com",
	projectId: "reactproject-4a1d6",
	storageBucket: "reactproject-4a1d6.appspot.com",
	messagingSenderId: "1067526123016",
	appId: "1:1067526123016:web:e8b338ea56ea3d4934abbd"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const botCompanies = db.collection("botCompanies")

/* const botCompany = db.collection('botCompany'); */

module.exports = botCompanies;