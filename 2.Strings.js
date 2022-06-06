const name = "Rei";
const age = 8;
//[My name is Rei. I am 8.]

//従来の方法
const message1 = "My name is " + name + ". I am " + age;
console.log(message1);
// My name is Rei. I am 8

const message2 = `My name is ${name}. I am ${age}`;
console.log(message2);
// My name is Rei. I am 8
