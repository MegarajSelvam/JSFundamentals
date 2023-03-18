'use strict';
///////////////////////////////////////////////////////////////
// Lesson 1

// Construction function, the New operator and Prototype

// OOP Function should always start with Capital letter
// arrow function doesnt work here. Only function expression and function will work here.
// It's because arrow function doesn't have this keyword.
// Note: Only difference between regular function and constructor function is we call the constructor function with new keyword
const Person = function (firstName, birthYear){
    console.log(this); // It will be empty object of Person
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear
    console.log(this); // Now this will be Person with firstName and birthYear

    // Never create a method inside constructor function.
    // It will add copy of this method for every object which we create. In case, if we have 100 object created, then 100 times this method got copied.
    // It is bad practice. It impacts performance.
    // To solve this, we will use prototype/prototype inheritance. Prototype just create one copy of the method and it will be reused everywhere, every object which we created.
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// When we call function with new keyword, following things happened:
// 1) New Emtpy object {} is created
// 2) Function is called, and this key word point to new empty object {} created in step 1
// 3) Newly created object {} linked to prototype
// 4) Function automatically returns the empty object {} created in step 1.

// Using construtor funciton to create as many object we want
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// So, we are able to create a object from function (constructor function).
const jay = 'Jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

// Prototypes
// Each and every function in JS automaticaly has a property called prototype. so constructor function also applicable.

console.log(Person.prototype);
// This is how we need to attach methods to Constructor funcitons
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}
console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(matilda.__proto__);
console.log(jack.__proto__);

// Person.Prototype is not a actually the prototype of person. It indicates all the objected created with the person constructor function.
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// For easy rememberance: prototype === prototypeOfLinkedObject

// We can also set property on prototypes
// This properties will not present directly, it will be added inside __proto__
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species'));   // false

// Prototype inheritance
console.log(jonas.__proto__); // Prototype of Jonas
console.log(jonas.__proto__.__proto__); // Prototype of object
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 7, 5, 7, 3]; //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)]
}
// Now all arrays will inherit unique method functionality
console.log(arr.unique());

//However extending functionality of build in type (arrays) is not good approach. The first reason is next version of JS might add a method with the same name that we are adding and it might work differently. It will break the code. 

const h1 = document.querySelector('h1');
console.dir(h1); 
console.dir(h1.__proto__); // It is big prototype chain
console.dir(x => x + 1); // It also has prototype. Remember function itself is a object. thats why we are able to call methods on that functions like bind method
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

// Lesson 2

// ES6 Classes

// Class expression syntax
// const PersonCl = class {

// }

// Class declaration
class PersonCl {
    // Whenever you create new object, this constructor calls automatically
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // This Method will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet1() {
        console.log(`Hello ${this.firstName}`);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();
jessica.greet1();
// Note: Class just hides the true nature of prototypal inheritance in JS

// Remember this point while using classes:
// 1. Classes are NOT hoisted. So classes can't be used before declaration
// 2. Classes are first-class citizen. It means we can pass classes as a parameter to function and return class from function. It's because Classes are nothing but special kind of function.
// 3. Classes are executed in strict mode

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

// Lesson 3

// Getters and setters properties
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    // getters
    get latest() {
        return this.movements.slice(-1).pop();
    },
    // setters
    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl1 {
    // Whenever you create new object, this constructor calls automatically
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // This Method will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet1() {
        console.log(`Hello ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }

    // Get and Set very useful for validation
    // Set a property that already exist.
    // we are using private property this._fullName 
    // it is to avoid infinite loop
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const varun = new PersonCl1('Varun ankam', 1996);
console.log(varun.age);
console.log(varun.__proto__);

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

// Lesson 4

// Static Methods

// Example for static methods
Array.from(document.querySelector('h1')); // This works
// [1, 2, 3].from() // But it will not work

// It's because thif from method is attached to array constructor not to the prototype property of the constructor. so not all the arrays will not inherit this method. 

// Example for static methods
Number.parseFloat(12);

const Employee = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
}

Employee.hey = function() {
    console.log('Hey there 😘');
    console.log(this);
}

Employee.hey();
const megaraj = new Employee('Megaraj', 1996);
// megaraj.hey(); // this will not work


class EmployeeCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }

    // Instance Method
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // STatic MEthod: adding static key word
    static hey() {
        console.log('Hey there 😘');
        console.log(this);
    }
}

EmployeeCl.hey();

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

// Lesson 5

// Object.create
// Prototype is there but not directly involved
// No prototype involved, no constructor involved and no new operator involved.
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    // bit like constructor function. but however it has nothing to do with constructor function. you can give any name
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
// Poor way of creating object
steven.name = 'Steven';
steven.birthYear = 2020;
steven.calcAge();
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
// Clean way of creating object
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////////////////////////////

// Lesson 6
// Inheritance Between Classes

// Check reference images

const PersonParent = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonParent.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const StudentChild = function (firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;

    // Instead of having duplicate code, try calling person:
    // Person(firstName, birthYear) This will not work, because for regular function this will be null
    Person.call(this, firstName, birthYear);

    this.course = course;
}

// Linking Prototype
// Prototype should be linked before adding any method to studentchild otherwise this method will be overridden by Person
// StudentChild.prototype = Person.prototype (reference images)
StudentChild.prototype = Object.create(Person.prototype);
console.dir(StudentChild.prototype.constructor); 
StudentChild.prototype.constructor = StudentChild; // This also need to be added
console.dir(StudentChild.prototype.constructor);

StudentChild.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new StudentChild('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof StudentChild);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Lesson 7
// Inheritance Between "Classes": ES6 Classes
// extned and super keyword 

class PersonClBase {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
}

class StudentCl extends PersonClBase {
    // Note: if you dont require any new property in your child class, then no need to create this constructor itself
    constructor(fullName, birthYear, course) {
      // Always needs to happen first!
      // This call to super function is responsible for creating this keyword in subclasses
      super(fullName, birthYear);
      this.course = course;
    }
  
    introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
  
    calcAge() {
      console.log(
        `I'm ${
          2037 - this.birthYear
        } years old, but as a student I feel more like ${
          2037 - this.birthYear + 10
        }`
      );
    }
}
  
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); // Parent class calcAge method is overrriden by child class calcAge method
martha.greet();
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Lesson 8
// Inheritance Between "Classes": Object.create

const PersonProtoBase = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
// const steven = Object.create(PersonProtoBase);
  
const StudentProto = Object.create(PersonProtoBase);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProtoBase.init.call(this, firstName, birthYear);
    this.course = course;
};
  
StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
  
const jay1 = Object.create(StudentProto);
jay1.init('Jay', 2010, 'Computer Science');
jay1.introduce();
jay1.calcAge();

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Lesson 8

// Encapsulation: Protected Properties and Methods

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // To make the property protected, first add underscore
        // Even after adding underscore still you will be able to access the fields. But developer needs to know this convention that this fields are protected and we should not use
        // underscore means one should not use this property directly
        // It's just convention. In JS there is no feature of real encapsulation. Just we are faking this
        this._movements = []; // Properties not based on any input
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    getMovement() {
        return this._movements
    }

    // Public interface
    deposit(val) {
        this._movements.push(val)
    }

    // Public interface
    // abstracts the fact withdrawl is negative
    withdraw(val) {
        this.deposit(-val)
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 111);
console.log(acc1);

// It's not a good approach
// We should restrict this mov property outside class
// acc1.movements.push(250);
// acc1.movements.push(-140);

// Cleaner approach
acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
// acc1.approveLoan(1000); // For real world we should not expose this method, it should be used only internally

console.log(acc1);
console.log(acc1.pin); // Ideally we should not expose this fields

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Lesson 9

// Encapsulation: Private Class Fields and Methods
// This is the feature yet to release by JS officially

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class AccountDetails {
    // 1) Public fields (instance)
    // No need to use let or const to declare this fields
    // This public instances will be present for all the instance of this classes, they are not in prototype
    locale = navigator.language;

    // 2) Private fields 
    // Truly will not be accessible outside this class
    #movements = [];
    #pin; // It will set to undefined

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public Methods
    getMovement() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    // 4) Private Methods
    // Hide implementation details outside the world
    #approveLoan(val) {
        return true;
    }

    // 5) Static Functions
    // Static functions will not be available for all this instance. it only available for class itself
    static helper() {
        console.log('Helper');
    }
}

const acc2 = new AccountDetails('Jonas', 'EUR', 111);
console.log(acc2);
// console.log(acc2.#movements); // It will give syntax error: Property '#movements' is not accessible outside class 'AccountDetails' because it has a private identifier.
console.log(acc2.getMovement());

// console.log(acc2.#approveLoan(100)); //It will give syntax error: Property '#approveLoan' is not accessible outside class 'AccountDetails' because it has a private identifier

// acc2.helper(); This will give error
AccountDetails.helper();

// Note: This feature is not yet rolled out officially by JS
// This feature currently partially working only in google chrome

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Lesson 10
// Chaining Methods

class AccountDetailsV2 {
    locale = navigator.language;
    #movements = [];
    #pin; 
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${owner}`);
    }

    getMovement() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
        return this; //This way we can achieve chaining
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    #approveLoan(val) {
        return true;
    }
}

const accV1 = new AccountDetailsV2('Jonas', 'EUR', 111);
console.log(accV1);
accV1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(accV1.getMovement());

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Lesson 11