import firebase from 'firebase';
class Firebase{
    constructor(){
        var firebaseConfig = {
            apiKey: "AIzaSyA-mfwPy7K2UEdN4vwE1B9gKdtyG7mxmRs",
            authDomain: "decisiontaker-bdba5.firebaseapp.com",
            databaseURL: "https://decisiontaker-bdba5.firebaseio.com",
            projectId: "decisiontaker-bdba5",
            storageBucket: "",
            messagingSenderId: "407539881838",
            appId: "1:407539881838:web:2656b758dc9e6e9a"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    
    }

}
//This Const firebaseSVC hold the object of the firebase
const FirebaseSever=new Firebase();
export default FirebaseSever;