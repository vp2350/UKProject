let dataValue;
// 1
window.onload = e => {
  console.log(firebase);
  pleaseCreateNew.style.display = 'none';
  //Get a reference to the databse
  let database = firebase.database();

  //Refer to a root node named `users`
  let ref = database.ref('users');

  // #4 This is where the magic happens!
  firebase
    .database()
    .ref('users')
    .on('value', dataChanged, firebaseError);

  function dataChanged(data) {
    console.log(data.val());
    dataValue = data.val();
  }

  function firebaseError(error) {
    console.log(error);
  }

  //UI SETUP
  loginButton.onclick = _ => {
    let loginValue = userName.value;
    if (dataValue[loginValue] == null) {
      pleaseCreateNew.style.display = 'block';
    } else {
      localStorage.setItem('loginId', loginValue);
      window.location = 'home.html';
    }
  };

  createAccountButton.onclick = _ => {
    window.location = 'CreateAccount.html';
  };

  //End UI setup
};