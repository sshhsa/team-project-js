import { saveLS, loadLS, removeLS } from './storage.js';
import { menusToggleOnAuth } from './header.js';

// Import needed function from Firebase Authentication SDK and RealTime Database
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Import notification service
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify Options
const notifyOptions = {
  fontFamily: 'DM Sans',
  zindex: 1010,
  clickToClose: true,
  position: 'center-top',
};

// Initialasing Firebase Auth and Database instances
const firebaseConfig = {
  apiKey: 'AIzaSyCzgSViH35dPAT3x6h1gt7sQXiu6qtVk-A',
  authDomain: 'book-store-a441d.firebaseapp.com',
  projectId: 'book-store-a441d',
  storageBucket: 'book-store-a441d.appspot.com',
  messagingSenderId: '10647209917',
  appId: '1:10647209917:web:07621d52f96a30e76ef4d4',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(
  app,
  'https://book-store-a441d-default-rtdb.europe-west1.firebasedatabase.app/'
);
const dbRef = ref(
  getDatabase(
    app,
    'https://book-store-a441d-default-rtdb.europe-west1.firebasedatabase.app/'
  )
);

// Объект пользователя. В переменной user.booksArr храним массив айдишников книг.
let user = {
  name: '',
  email: '',
  password: '',
  photoUrl: './images/png/user.png',
  isSignedIn: false,
  booksArr: [],
};

//--- ключи для локального хранилища.
const LOCALKEY = 'user';
const LOGINKEY = 'logged';
//-------------------------------------------------------------------
//Local storage engine ---------
function setUserInLS(object) {
  saveLS(LOCALKEY, object);
}

function getUserFromLS() {
  return loadLS(LOCALKEY);
}

function isUserSet() {
  return !!loadLS(LOGINKEY);
}

// if (isUserSet()) {
//   user = getUserFromLS();
// }

//-------------------------------------------------------------------

// sign up user
async function createUser({ email } = user, password) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const userCur = userCredential.user;
      // Update profile!!!
      updateProfile(auth.currentUser, {
        displayName: user.name,
        photoURL: user.photoUrl,
      }).then(() => {
        // Profile update success...
      });

      user.userId = userCur.uid;
      user.isSignedIn = true;
      saveLS(LOGINKEY, 'true');
      setUserInLS(user);
      Notify.success(`New user ${user.name} created`, notifyOptions);
      menusToggleOnAuth();
      return true;
    })
    .catch(error => {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        Notify.failure(`This email already in use!`, notifyOptions);
        return false;
        // Display email fail
      }
    });
}

// Sign in user
async function signInUser({ email } = user, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const userCur = userCredential.user;
      user.name = userCur.displayName;
      user.photoUrl = userCur.photoURL;
      user.userId = userCur.uid;
      user.isSignedIn = true;
      saveLS(LOGINKEY, 'true');

      getUserData(user);
      Notify.success(`Sign-in successful`, notifyOptions);
      // Get data from the database
      setUserInLS(user);
      menusToggleOnAuth();
      return true;
    })
    .catch(error => {
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        // Display email fail
        Notify.failure(`Password in wrong direction!`, notifyOptions);
        return false;
      }
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        // Display email fail
        Notify.failure(`Need to be registered first!`, notifyOptions);
        return false;
      }
      if (error.code === 'auth/too-many-requests') {
        // Display email fail
        Notify.failure(`Too many wrong requests!`, notifyOptions);
        return false;
      }
    });
}

// sign out user
function signOutUser() {
  signOut(auth)
    .then(() => {
      user.isSignedIn = false;
      menusToggleOnAuth();
      removeLS(LOGINKEY);
      removeLS(LOCALKEY);
      Notify.success(`Sign-out successful`, notifyOptions);
      return true;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      return false;
    });
}

// Firebase realtime database update
async function updateUserDatabase({ booksArr }) {
  await set(ref(database, `users/${user.userId}`), booksArr)
    .then(() => {
      Notify.success(`DataBase updated!`, notifyOptions);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      return false;
    });
}

// Get firebase realtime database data
async function getUserData({ userId }) {
  await get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return true;
      }
      user.booksArr = snapshot.val();
      setUserInLS(user);
      Notify.success(`Shoplist downloaded from DataBase!`, notifyOptions);
      return false;
    })
    .catch(error => {
      Notify.warning('Error getting data from DataBase', notifyOptions);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

//Импорт для хидера - объект User (используется его поля 'user.isSignedIn' (булеан)-
//проверка на залогиненность, 'user.name' (строка) - имя пользователя) и функция 'signOutUser(user)'

//Импорт для шоп-листа - объект 'User' (поле 'user.isSignedIn' - проверка на залогиненность) и
//функции: 'updateUserDatabase(user)' - обновление базы в облаке (из массива - ('user.booksArr')),
//'getUserData(user)' получение данных из облака в массив - ('user.booksArr')

export {
  user,
  createUser,
  signInUser,
  signOutUser,
  setUserInLS,
  getUserFromLS,
  isUserSet,
  updateUserDatabase,
  getUserData,
};
