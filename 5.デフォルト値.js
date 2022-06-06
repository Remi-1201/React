const sayHello = (name) => console.log(`Hello ${name}!`);

sayHello("Rei");
// Hello Rei!
sayHello();
// Hello undefined!

//---------------------
// Set default
const sayHello2 = (name = "Guest") => console.log(`Hello ${name}!`);

sayHello2();
// Hello Guest!
sayHello2("Mirei");
// Hello Mirei!
