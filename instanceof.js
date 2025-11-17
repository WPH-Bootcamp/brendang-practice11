class Animal {
  // ...
}

class Dog extends Animal {
  // ...
}

class Cat {
  // ...
}

const myAnimal = new Animal();
const myDog = new Dog();
const myCat = new Cat();

console.log(myAnimal instanceof Animal); // Output: true
console.log(myDog instanceof Dog);     // Output: true
console.log(myDog instanceof Animal);  // Output: true (karena Dog mewarisi dari Animal)
console.log(myCat instanceof Cat);     // Output: true
console.log(myCat instanceof Animal);  // Output: false (Cat tidak mewarisi dari Animal)
console.log([] instanceof Array);      // Output: true
console.log({} instanceof Object);     // Output: true