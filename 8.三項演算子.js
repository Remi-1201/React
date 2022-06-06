// 三項演算子
// ある条件？ 条件がTrueの時 : 条件がFalseの時

const val1 = 1 > 0 ? "True" : "False";
console.log(val1);
// True

const val2 = 1 < 0 ? "True" : "False";
console.log(val2);
// False

//---------------------

const num = 1300;
console.log(num.toLocaleString());
// 1,300

const newNum = "1300";
const formattedNum =
  typeof newNum === "number" ? num.toLocaleString() : "Please insert numbers";

console.log(formattedNum);
// Please insert numbers

//---------------------

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "It is over 100" : "It is less than 100";
};

console.log(checkSum(50, 60));
// It is over 100
console.log(checkSum(50, 40));
// It is less than 100
