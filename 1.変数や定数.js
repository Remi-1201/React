// * const, letなどの変数宣言
var val1 = "var変数";
console.log(val1);
// var変数

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);
// var変数を上書き

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);
// var変数を再宣言

//---------------------

let val2 = "let変数";
console.log(val2);
// let変数

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);
// let変数を上書き

// let変数は再宣言不可能
let val2 = "let変数を再宣言";
console.log(val2);
// Error

//---------------------

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
val3 = "const変数を上書き";
// TypeError: "val3" is read-only

// const変数は再宣言不可能
const val3 = "const変数を再宣言";
// Error

//---------------------
// constで定義したオブジェクトはプロバティの変更が可能
const val4 = {
  name: "rei",
  age: 2
};
val4.name = "mirei";
console.log(val4);
// {name: "mirei", age: 2}
val4.address = "Sapporo";
console.log(val4);
// {name: "mirei", age: 2, address: "Sapporo"}

//---------------------
// constで定義した配列はプロバティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);
// ["dog", "cat"]

val5[0] = "bird";
console.log(val5);
// ["bird", "cat"]

val5.push("monkey");
console.log(val5);
// ["bird", "cat", "monkey"]
