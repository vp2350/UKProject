let userID;
window.onload = e => {
    userID = window.localStorage.getItem('loginId');
    titleLine.innerHTML = `Hello ${userID}!`;
    
    //get a reference to the databse
    let database = firebase.database();
    let ref = database.ref('users');
    
    //UI SETUP
    logoutButton.onclick = logout;
    introOne.onclick = function(){window.location = "introductionOne.html"};
    introTwo.onclick = function(){window.location = "introductionTwo.html"};   
    
    //TOPIC COLLAPSIBLES  
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active1");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    //END TOPIC COLLAPSIBLE                
}


let offset = 0;
// 2
let displayTerm = '';

function logout() {
    localStorage.clear();
    window.location = 'index.html';
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}