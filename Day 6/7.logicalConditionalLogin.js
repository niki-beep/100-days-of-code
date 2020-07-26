var isLoggedIn = true
var isEmailverified = false
var cardInfo = true

if (isLoggedIn && isEmailverified && cardInfo){
    console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed to do that");
}

// New program
var email = true;
var google = false;
var facebook = false;

if(email || google || facebook) {
    console.log("Access allowed");
}