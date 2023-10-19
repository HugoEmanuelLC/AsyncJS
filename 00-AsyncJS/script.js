console.log("Program starts");

let a = 1;
let b = 2;

console.log(`Variable a (${a}) and b (${b}) are declared`);

const sum = (num1, num2) => {
  console.log(`I'm inside the function`);
  return num1 + num2;
};

console.log("Function declared but not called yet");

console.log(sum(a, b));

console.log("Function was called");

for (let i = 0; i < 3; i++) {
  console.log(`I am inside the loop. I am turn ${i}`);
}

console.log("end of program");

console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
console.log(" ");
console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

console.log("Program starts");

// let a = 1;
// let b = 2;

console.log(`Variable a (${a}) and b (${b}) are declared`);

const sum2 = (num1, num2) => {
  console.log(`I'm inside the function`);
  return `The result from the function is ${num1 + num2}`;
};

console.log("Function declared but not called yet");

console.log(sum2(a, b));

console.log("Function ran");

setTimeout(() => {
  console.log("I ran after 2 seconds");
}, 2000);

for (let i = 0; i < 3; i++) {
  console.log(`I am inside the loop. I am turn ${i}`);
}

console.log("end of program");



console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
console.log(" ");
console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");



let str = "Initial";

setTimeout(() => {
  str = "End";
}, 1);

console.log(str);