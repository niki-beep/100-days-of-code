__1. Switch Case In JavaScript__ 

If we are having multiple conditions, using a switch case to access those conditions is a better choice rather than using the If/else statement. It has a lucid code structure meant for saving time. The structure or format of the switch case is :

``` javascript
    var key = value;
    switch(key) {
        case "value 1" :
            return or log something;
        case "value 2" :
            return or log something;
        default :
            return or log something if the value 
            doesn't mateches any other 
            above values;
     }
```
As you can see, for a key or a variable , it's values are checked in the switch cases. If any value matches the value of the variable then something is returned. Otherwise default case would be executed.

The break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.

For example, 

``` javascript
var fun = 0;
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
    break;
  default:
    console.log('default');
}
```

Here, the program outputs 0 and 1 because there is no break inside those cases.

Putting a default case in between other cases will also work fine and won't result in any error.

....

For Multi-case : Single Operations : If there are no statements or operations inside the cases, then the subsequent case having some operation will be performed for all the following cases. For example,

``` javascript
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is fun');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}
```

This will output This animal is fun if cow/girrafe/dog/pig is given as value to Animal variable.

Block Scope Variable within switch statements :

Block scope variables are declared using let and const statements. For example :

``` javascript
const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}
```

This example will output the error Uncaught SyntaxError: Identifier 'message' has already been declared which you were not probably expecting.

This is because the first let message = 'hello'; conflicts with second let statement let message = 'hi'; even they're within their own separate case clauses case 'say_hello': and case 'say_hi':. Ultimately, this is due to both let statements being interpreted as duplicate declarations of the same variable name within the same block scope.

We can easily fix this by wrapping our case clauses with brackets:

``` javascript
const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}
```

__2. Coersion in JavaScript__

Values which are consided as false in JavaScript are : 
* undefined
* null
* " "
* ' '
* 0
* -0
* NaN
* 0n

Apart from these, all other values are interpreted as true. 

Coersion is nothing but type coersion or the differences in output between == and ===. 

In more definitive terms, Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

For example ,

``` javaScript
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

The above program will output 59 as javaScript assumes both the values to be a string.
