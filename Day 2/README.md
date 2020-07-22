**1. Variables and Constants in JavaScript** : 

    The difference between variables and constant is that we can change the value of the variables if and when we need to. While in the case of constants, we cannot easily change the value.

    In JS the variables are defined using the let keyword. While constants are defined using the const keyword.

    If we want to change the value of the constant, it is a better practice to never override it, instead just remove the const keyword.

**2. Basic Sign up Form using the knowledge of variables:** 

As we must have seen in many sign up forms that we fill in order to access the websites these days, there are certain criterias that needed to be filled in order to login successfully.
Some of those criterias are we have to provide our name, emailID, phone number, password and we have to confirm our password. All these field need to be stored in variables. Most specifically these need to be stored as constants so the user shouldn't be able to change these once entered. But for the sake of simplicity, we are going to store these in variables. 

Unlike many other programming languages, we don't need to define the datatypes of variables in order to store value in them. In JavaScript, we use the var/ let keyword alongside the variable name and store value in it. For example : 
``` javascript

var name = 'Nik'
let name = 'Nik'

```

Var and let keyword has different functionalities when it comes to scope of variables. But that is for later part to dive in. For now, let's just define the above variables for our Signup Form.

``` javascript

var fullName = 'Joey Martin';
var email = 'joey123@gmail.com';
var password = '123ghj';
var confirmPassword = '123ghj';
var phoneNumber = 654789;
var SignedInFromGoogle = false;

```

Here as you can observe, variables like fullName, email, password are strings. PhoneNumber is of interger or number type. There is a new variable declared above called SignedInFromGoogle which is of boolean type. Whenever we land in a signup page, there is an additional option to logIn from our Google or Gmail account. If a user logs in using Gmail, then it will return us true.

Now, how are we going to access the variables. This is done using an in-built javascript function log. 

``` javascript

console.log("Hello World! Happy Learning.")

```

This is going to print *Hello World! Happy Learning*.

There are many ways to print the above variables. We can use + and , operators. For example :

``` javascript

console.log('Name of the new user is' +fullName)
console.log('Email of the new user is' +email)


```

Or 

``` javascript

console.log('Name of the new user is', fullName)
console.log('Email of the new user is', email)


```

You must be wondering whatif I want to print everything in a single line without in a much simpler way than above. Ofcourse you can use \n(newline) and + operator. But an easy way to print it is by using `` instead of "". See the below code to understand :


``` javascript

console.log(`Name of the new user is ${fullName}
Email : ${email}
Phone Number provided by the user : ${phoneNumber}
Has the user signed In through Google account : ${SignedInFromGoogle}
`);


```

This will provide an output of : 

```
Name of the new user is Joey Martin
Email : joey123@gmail.com
Phone Number provided by the user : 654789
Has the user signed In through Google account : false

```

__3. Operators In JavaScript :__ 

Suppose we want to calculate the discount provided in a particular product, we can easily do so by having a basic knowlege in operators and Math library. 
It's always a better practice to go through the documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math