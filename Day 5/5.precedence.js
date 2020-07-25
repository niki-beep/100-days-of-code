let x;
let y;
console.log(x = y = 15);  // same as a = (b = 5)

function foo(side, x) {
    console.log("Evaluating the " + side + " side");
    return x;
}

console.log(foo("left", 6) / foo("right", 2));

function fun(x, y) {
    console.log("Evaluating the " + x + " side");
    return y;
}
console.log(fun("left", 2) ** fun("right", 3));

function lane(x, y) {
    console.log("Which is the " + x + " side");
    return y;
}

console.log(lane("left", 6) / lane("middle", 2) / lane("right", 3));

function foo(x, y) {
    console.log("Evaluating the " + x + " side");
    return y;
}

console.log(foo("left", 2) ** foo("middle", 3) ** foo("right", 2));