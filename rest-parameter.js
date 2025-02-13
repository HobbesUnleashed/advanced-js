// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll (1, 2, 3);

console.log("Sum:", sum);

// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    // for (i in rest) {}
    // Returns the index position of rest (e.g 012)
    for (let i of rest) {  // Returns the values of rest
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3:", sum3);

