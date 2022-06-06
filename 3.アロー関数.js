function func0(str) {
  return str;
}
console.log(func0("This is func0."));
// This is func0.

const func1 = function (str) {
  return str;
};
console.log(func1("This is func1."));
// This is func1.

//---------------------
const func2 = (str) => {
  return str;
};
console.log(func2("This is func2."));
// This is func2.

const func3 = (str) => str;
console.log(func3("This is func3."));
// This is func3.

//---------------------
const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));
// 30

const func5 = (num1, num2) => num1 + num2;
console.log(func5(20, 30));
// 50
