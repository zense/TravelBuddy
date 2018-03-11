(function () {
	const config = {
    apiKey: "AIzaSyDp1zWDVUtyn-4cR2I8MzPfydgZ4pnPdYo",
    authDomain: "tb-007.firebaseapp.com",
    databaseURL: "https://tb-007.firebaseio.com",
    projectId: "tb-007",
    storageBucket: "tb-007.appspot.com",
    messagingSenderId: "1076120346565"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  btnLogin.addEventListener('click',e=> {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email,
  		pass);
  		promise.catch(e => console.log(e.message))
  });

  btnSignUp.addEventListener('click',e=> {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email,
  		pass);
  		promise.catch(e => console.log(e.message))
  });


}());