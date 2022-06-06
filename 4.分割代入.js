const myProfile = {
  name: "Rei",
  age: 8
};

const message1 = `My name is ${myProfile.name}. I am ${myProfile.age}.`;
console.log(message1);
// My name is Rei. I am 8.

//---------------------

// to shorten the code above
const { name, age } = myProfile;

const message2 = `My name is ${name}. I am ${age}.`;
console.log(message2);
// My name is Rei. I am 8.

---------------------
// Array

const myProfile = ['Mirei', 28];

const message3 = `My name is ${myProfile[0]}. I am ${myProfile[1]}`;
console.log(message3);
// My name is Mirei. I am 28 

const [name, age] = myProfile;
const message4 = `My name is ${name}. I am ${age}`;
console.log(message4);
// My name is Mirei. I am 28 