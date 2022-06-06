// スプレッド構文．．．
// 1- 配列の展開

const arr1 = [1, 2];
console.log(arr1);
// [1, 2]
console.log(...arr1);
// 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
// 3
sumFunc(...arr1);
// 3

//---------------------
//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
//1
console.log(num2);
//2
console.log(arr3);
// [3, 4, 5]

//---------------------
//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// copy from arr4
const arr6 = [...arr4];
console.log(arr6);
// [10, 20]

// arr6を変更
arr6[0] = 100;
console.log(arr6);
// [100, 20]
console.log(arr4);
// [10, 20] => arr6を変更してもarr4に影響を与えない

// 結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);
// [10, 20, 30, 40]

const arr8 = arr4;
console.log(arr8); // [10, 20]
arr8[0] = 100;
console.log(arr4);
// [100, 20] => 元の配列が影響を与えられてしまう！
