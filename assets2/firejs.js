$(document).ready(function() {
// Initialize Firebase
  const config = {
    apiKey: "AIzaSyAuYurRhlpUCigwzBy1q4ear58FUZox8OA",
    authDomain: "showspotter-10b13.firebaseapp.com",
    databaseURL: "https://showspotter-10b13.firebaseio.com",
    projectId: "showspotter-10b13",
    storageBucket: "showspotter-10b13.appspot.com",
    messagingSenderId: "846813024835"
  };

  firebase.initializeApp(config);

  // Get elements and define buttons
  const txtEmail = $('#txtEmail').val().trim();
  const txtPassword = $('#txtPassword').val().trim();
  const btnLogin = $('#btnLogin');
  const btnSignUp = $('#btnSignUp');
  const btnLogout = $('#btnLogout');

  //add login event
  btnLogin.on("click", function(event) {
    event.preventDefault();
    // get email and pass
    const email = txtEmail;
    const pass = txtPassword;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  })

  // add sign up event
  btnSignUp.on("click", function(event) {
    event.preventDefault();
    // get email and pass
    const email = txtEmail;
    const pass = txtPassword;
    const auth = firebase.auth();
    // create user
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  })

  // log out current user
  btnLogout.on("click", function(event){
    event.preventDefault();
    firebase.auth().signOut();
  })

 // realtime listener, checks for signin
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
     // btnLogout.classList.remove('hide');
    } else {
      console.log('user not logged in');
     // btnLogout.classList.add('hide');
    }
  });
})
