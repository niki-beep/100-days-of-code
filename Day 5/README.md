
> __1. Operator Precedence In JavaScript__ : 

Operator precedence is a measure of how the operators are parsed concerning each other. In layman's term, it is to determine which operator would execute in the first place if we are provided with a series of operators.

for Example : In the code snippet ``` console.log(3 + 4 * 5); ``` , according to the famous BODMAS rule, * operator has a higher precedence than the + operator. In similar manner, ``` console.log(4 * 3 ** 2); ``` here ** operator has higher precedence than * operator and hence that operation will be executed in the first place. 

__Precedence and it's relation with Associativity :__

Associativity arises when in the same code snippet, we are provided the same operator multiple times. In that scenario, associativity comes into play and it decided the right side of the code snippet will execute first or the left side. 

But one thing to note is that precedence is greater than associativity. And we can change the associativity by using the () brackets. 

For example : In the code snippet ```console.log(6/2/3);```, it will output 1 because division is left associative which is equal to ```console.log((6/2)/3)```. Whereas if we are talking about ```console.log(2 ** 3 ** 2);``` It will output 512. That is because ** operator is right associative which is equal to ```console.log(2 ** (3 ** 2));```. 

But we can change the associativity using the brackets. For example, ```console.log((2 ** 3) ** 2);``` will output 64.

For knowing more about operator precedence, there is a list provided in the [MDN JavaScript Documentation](http://www.mywebsite.com).

---

>