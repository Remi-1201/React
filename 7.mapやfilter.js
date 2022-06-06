// mapやfilterを使った配列の処理
const nameArr = ["Rimi", "Rima", "Rimo"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
  console.log(`${nameArr[index]} is no.${index}`);
}
// ["Rimi", "Rima", "Rimo"]

for (let index = 0; index < nameArr.length; index++) {
  console.log(`${nameArr[index]} is no.${index + 1}`);
}
// Rimi is no.1
// Rima is no.2 
// Rimo is no.3 

//---------------------

const nameArr2 = nameArr.map((name)=>{
  return name;
})
console.log(nameArr2);
// ["Rimi", "Rima", "Rimo"]

nameArr.map((name) => console.log(name));
// ["Rimi", "Rima", "Rimo"]

nameArr.map((name, index) => console.log(`${name} is no.${index + 1}`));
// Rimi is no.1
// Rima is no.2 
// Rimo is no.3 

//---------------------
// filterは関数内に条件を設定したい時に使うもの

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);
// [2, 4]

//---------------------

const newNameArr = nameArr.map((name) => {
  if (name === "Rimi") {
    return name
  } else {
    return `Ms.${name}`  
  }
})
console.log(newNameArr);
// ["Rimi", "Ms.Rima", "Ms.Rimo"]