class NamaClass {
  constructor(parameter1, parameter2) {
    // Inisialisasi properti objek
    this.properti1 = parameter1;
    this.properti2 = parameter2;
  }

  metode1() {
    // Logika metode
    return 'Ini adalah metode 1';
  }

  metode2() {
    // Logika metode lain
    return 'Ini adalah metode 2';
  }
}

// Membuat instance dari class
const objekBaru = new NamaClass("nilai1", "nilai2");
console.log(objekBaru.metode1())


class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  // Template Literal
  getDetails() {
    return `This is a ${this.brand} from ${this.year}.`;
  }

  getDetailsNonTemplate() {
    return "This is a " + this.brand + " from " + this.year + ".";
  }
}

const myCar = new Car("Toyota", 2020);
console.log(myCar.getDetails()); // Output: This is a Toyota from 2020.