//Create applications with the following roles :
//admin - gets full access to the website
//sub-admin - gets access to create/delete content
//problemsetter - gets access to create / delete tests
//student - gets access to consume content
var user = "student"

switch(user){
    case "admin" :
        console.log("Gets full access to the website.");
        break;
    case "sub-admin" :
        console.log("Gets access to create/delete contents of the website");
        break;
    case "problem-setter" :
        console.log("Creates questions for the tests");
        break;
    case "student" :
        console.log("Consumes the content of the website");
        break;
    default :
        console.log("User is on trial");
}

// 
var fun = 2;
switch (fun) {
  case -2:
    console.log('I dont like negatives');
    break;
  case 0: 
    console.log(0);
  case 1: 
    console.log(1);
    break; 
  case 2:
    console.log(2);
  default:
    console.log('default');
}

// program - 3
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; 
  default:
    console.log('default')
    
  case 1:  
    console.log('1');
}

//program - 4
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}

//program - 5
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

//program - 6


const action = 'say_hello';
switch (action) {
  case 'say_hello': { 
    let message = 'hello';
    console.log(message);
    break;
  } 
  case 'say_hi': { 
    let message = 'hi';
    console.log(message);
    break;
  } 
  default: { 
    console.log('Empty action received.');
    break;
  } 
}