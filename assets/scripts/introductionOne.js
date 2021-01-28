let userID;
window.onload = e => {
  userID = window.localStorage.getItem('loginId');
  titleLine.innerHTML = `Hello ${userID}!`;

  // #1 - get a reference to the databse
  let database = firebase.database();
  let ref = database.ref('users');

  logoutButton.onclick = logout;
  next.addEventListener('click', function(){changeLocation("introductionTwo.html")}, false);
    
};
let offset = 0;
// 2
let displayTerm = '';

function logout() {
  localStorage.clear();
  window.location = 'index.html';
}
  
function changeLocation(s){
    window.location = s;
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