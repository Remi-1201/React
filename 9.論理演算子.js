// 論理演算子の本当の意味を知ろう && ||

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1 or 2 is true");
}
// 1 or 2 is true

if (flag1 && flag2) {
  console.log("1 and 2 is true");
}
// nothing

//---------------------
// ||は左側がfalseなら右側を返す

const num = null;
const fee = num || "金額未設定です";

console.log(fee);
// 金額未設定です

//  && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何かが設定された";

console.log(fee2);
// 何かが設定された
