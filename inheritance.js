class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Memanggil constructor Animal
    this.breed = breed;
  }

  speakDog() {
    this.speak();
    console.log(`${this.name} barks!`);
  }

  fetch() {
    console.log(`${this.name} is fetching the ball.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speakDog(); // Output: Buddy barks!
myDog.fetch(); // Output: Buddy is fetching the ball.
console.log(myDog.name); // Output: Buddy