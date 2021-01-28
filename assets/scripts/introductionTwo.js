let userID;
window.onload = e => {
  userID = window.localStorage.getItem('loginId');

  // #1 - get a reference to the databse
  let database = firebase.database();
  let ref = database.ref('users');

  logoutButton.onclick = logout;
  //let quizForm = document.getElementById("quizForm");
  //quizForm.onsubmit = foo;
  back.addEventListener('click', function(){changeLocation("introductionOne.html")}, false);

};
let offset = 0;
// 2
let displayTerm = '';

function logout() {
  localStorage.clear();
  window.location = 'index.html';
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
function foo(e) {
   e.preventDefault();  
   console.log("Submit button clicked!");
   return false;
}
  
function changeLocation(s){
    window.location = s;
}
