// Objek sederhana
let person = {
  // properti
  name: "Alice",
  // method
  greet: function () {
    return "Hello, my name is " + this.name;
  },
  need: () => {
    console.log("Hello, i need");
  },
};

const simpanNilai = person.greet();
const needNilai = person.need();

console.log("contoh 1 : " + simpanNilai);
console.log("contoh 2 : " + needNilai);

// Objek lain yang mewarisi dari 'person' melalui Object.create()
let anotherPerson = Object.create(person);
anotherPerson.name = "Bob";
anotherPerson.greet = () => {
  console.log("Hello, my name is " + anotherPerson.name);
};

person.greet(); // Output: Hello, my name is Alice
anotherPerson.greet(); // Output: Hello, my name is Bob (greet diwarisi dari person)

console.log(anotherPerson.__proto__ === person); // Output: true
