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

// нужно экспортировать функция логаут и функция апдейта базы
//
const user = {
  name: '',
  photoUrl: './images/png/user.png',
  email: '',
  password: '',
  booksArr: [],
  userId: '',
  isSignedIn: false,

  // Initialasing Firebase Auth
  auth: getAuth(),
};

// Handle Authentication form Modal window
const authForm = document.querySelector('.js-auth-form');
const inputName = document.querySelector('.auth-name');
const buttonChooseForm = document.querySelector('.button-form-choose');

authForm.addEventListener('submit', onSubmitAuthForm);
buttonChooseForm.addEventListener('click', onClickButtonChooseForm);

//Choosing SignUp or SignIn method autorization
function onClickButtonChooseForm(event) {
  if (
    !event.target.classList.contains('auth-link') ||
    event.target.classList.contains('button-selected')
  ) {
    return;
  }

  if (event.target.classList.contains('signin')) {
    inputName.style.display = 'none';
    authForm.lastElementChild.textContent = 'sign in';
    event.target.parentElement.firstElementChild.classList.toggle(
      'button-selected'
    );
    event.target.parentElement.lastElementChild.classList.toggle(
      'button-selected'
    );
    return;
  }
  event.target.parentElement.firstElementChild.classList.toggle(
    'button-selected'
  );
  event.target.parentElement.lastElementChild.classList.toggle(
    'button-selected'
  );
  inputName.style.display = 'inline-block';
  authForm.lastElementChild.textContent = 'sign up';
}

//Submit authentication form
function onSubmitAuthForm(event) {
  event.preventDefault();
  const {
    elements: { name, email, password },
  } = event.currentTarget;
  user.name = name.value;
  user.email = email.value;
  user.password = password.value;
  if (inputName.style.display === 'none') {
    // Check for empty fields
    if (!user.email.trim() || !user.password.trim) {
      Notify.failure(`Please complete all fields!`, notifyOptions);
    }
    // console.log('signin');
    signInUser(user);
    return;
  }
  // Check for empty fields
  if (!user.name.trim() || !user.email.trim || !user.password.trim) {
    Notify.failure(`Please complete all fields!`, notifyOptions);
    return;
  }
  createUser(user);
}

// sign up user
async function createUser({ email, password, auth }) {
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
      authForm.reset();
      backDropClosing();
      Notify.success(`New user ${user.name} created`, notifyOptions);
    })
    .catch(error => {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        // Display email fail
        return Notify.failure(`This email already in use!`, notifyOptions);
      }
    });
}

// Sign in user
async function signInUser({ email, password, auth }) {
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const userCur = userCredential.user;
      user.name = userCur.displayName;
      user.photoUrl = userCur.photoURL;
      user.userId = userCur.uid;
      user.isSignedIn = true;
      // Get data from the database if user have any stored data
      if (getUserData(user)) {
        updateUserDatabase(user);
      }
      // Reset authentication form
      authForm.reset();
      backDropClosing();
      Notify.success(`Sign-in successful`, notifyOptions);
    })
    .catch(error => {
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        // Display email fail
        return Notify.failure(`Password in wrong direction!`, notifyOptions);
      }
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        // Display email fail
        return Notify.failure(`Need to be registered first!`, notifyOptions);
      }
      if (error.code === 'auth/too-many-requests') {
        // Display email fail
        return Notify.failure(`Too many wrong requests!`, notifyOptions);
      }
    });
}

// sign out user
function signOutUser({ auth, booksArr }) {
  if (booksArr) {
    updateUserDatabase(user);
  }
  signOut(auth)
    .then(() => {
      user.auth = '';
      user.isSignedIn = false;
      authForm.reset();
      Notify.success(`Sign-out successful`, notifyOptions);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

async function updateUserDatabase({ booksArr }) {
  await set(ref(database, `users/${user.userId}`), {
    books: booksArr,
  });
  Notify.success(`DataBase updated!`, notifyOptions);
}

async function getUserData({ userId }) {
  await get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return true;
      }
      user.booksArr = snapshot.val();
      // console.log(user.booksArr);
      Notify.success(`Shoplist downloaded from DataBase!`, notifyOptions);
      return false;
    })
    .catch(error => {
      Notify.warning('Error getting data from DataBase', notifyOptions);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//=============================================================
// Открытие и закрытие модального окна авторизации
//==================================================================
const refs = {
  bodySelector: document.body,
  backDropAuth: document.querySelector('.js-overlay-modal'),
  authModalClose: document.querySelector('.js-modal-close'),
  //from header
  authUserLogout: document.querySelector('.btn-header-logout'),
  authModalOpen: document.querySelector('.btn-header'),
};
refs.authModalClose.addEventListener('click', onCrossAuthClose);
refs.authModalOpen.addEventListener('click', onClickOpenAuthModal);
refs.authUserLogout.addEventListener('click', onClickOpenAuthLogout);
function onClickOpenAuthLogout() {
  signOutUser(user);
}
function onClickOpenAuthModal() {
  document.body.style.position = 'fixed';
  refs.backDropAuth.classList.toggle('is-hidden');
  refs.backDropAuth.addEventListener('click', onBackDropClickClose);
  document.addEventListener('keydown', exitViaEsc);
}
function onCrossAuthClose() {
  backDropClosing();
}
function onBackDropClickClose(event) {
  if (event.target.classList.contains('js-overlay-modal')) {
    backDropClosing();
  }
}
function exitViaEsc(event) {
  if (event.key === 'Escape') {
    backDropClosing();
  }
}
function backDropClosing() {
  document.body.style.position = '';
  refs.backDropAuth.classList.toggle('is-hidden');
  refs.backDropAuth.removeEventListener('click', onBackDropClickClose);
  document.removeEventListener('keydown', exitViaEsc);
  // Reseting Authentication form to SignUp state
  buttonChooseForm.firstElementChild.classList.add('button-selected');
  buttonChooseForm.lastElementChild.classList.remove('button-selected');
  inputName.style.display = 'inline-block';
  authForm.lastElementChild.textContent = 'sign up';
}
//------------------------------------------------------------------

//Импорт для хидера - объект User (используется его поля 'user.isSignedIn' (булеан)-
//проверка на залогиненность, 'user.name' (строка) - имя пользователя) и функция 'signOutUser(user)'

//Импорт для шоп-листа - объект 'User' (поле 'user.isSignedIn' - проверка на залогиненность) и
//функции: 'updateUserDatabase(user)' - обновление базы в облаке (из массива - ('user.booksArr')),
//'getUserData(user)' получение данных из облака в массив - ('user.booksArr')

export { user, signOutUser, updateUserDatabase, getUserData };
