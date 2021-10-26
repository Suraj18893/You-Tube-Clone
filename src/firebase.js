import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB0bEzyZFuAeNEW5iolc4VbaVUbl4FupCA",
  authDomain: "you-tube-clone-7cd66.firebaseapp.com",
  projectId: "you-tube-clone-7cd66",
  storageBucket: "you-tube-clone-7cd66.appspot.com",
  messagingSenderId: "973039017403",
  appId: "1:973039017403:web:48761986f3216f6126789e",
};

firebase.initializeApp(firebaseConfig)


export default firebase.auth()