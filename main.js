// String , Numbers , Boolean, null, undefined, symbol
/*
const name = "John"; //string
const age = 30; //number
const rating = 4.5; //number
const boolean = true; //boolean
const x = null; //null
const y = undefined; //undefined
let z; //undefined
*/
const namess = "Frezzar";
console.log(namess);
const songs = 84;
const sound = "song";
console.log(songs);
const theAnswer = true;
console.log(theAnswer);
const thePort = null;
console.log(thePort);
const oneIntoZero = undefined;
console.log(oneIntoZero);

//-------------------------------------------------------------------------------------------------

// STRINGS
const name = "Freddy";
const age = 26;
// Concatination is the old method

console.log("My name is " + name + " and i am " + age + " old");
//Template Literal is the new and easy way
console.log(`The beggining of ${namess} is a ${sound}`);
console.log(`My name is ${name} and i am ${age} old`);
// Properties & Methods of String
console.log(namess.length);
console.log(name.length); //length is a property therefore no parethesis()
console.log(name.toUpperCase()); //toUpperCase() is a method therefore has parenthesis()
console.log(name.toLowerCase()); //toLowerCase() is a method therefore has parenthesis()
console.log(name.substring(1, 2)); //Subtracts the characters from the string (those ouside the range)
//Chaining methods together
console.log(name.substring(0, 2).toUpperCase());
//Spliting Freddy into F, r, e, d, d, y
console.log(name.split(""));
// let's split again
const s = "technology, computers, it, code";
const phrase = "How are you Frezar my brother";
const phrases = "How, are, you, Frezar, my, brother";
console.log(s.split(", ")); //we used comma space ", "  to split s
console.log(phrase.split(" ")); //we have split the phrase using space " "
console.log(phrases.split(",")); //we have split the phrase using comma
//The phrase then becomes an array
/*
[
    "How",
    " are",
    " you",
    " Frezar",
    " my",
    " brother"
]
*/

/* 
OTHER PROPERTIES & METHODS OF STRIGNS ANd Real Life examples*/
/*
charAt(index): Returns the character at a specified index.
indexOf(substring): Returns the first index of the substring, or -1 if not found.
toLowerCase(): Converts all characters in the string to lowercase.
*/
//length is a property therefore no parethesis()

//toUpperCase(): Converts all characters in the string to uppercase.
//Standerdising user input eg country code
const southAfricaCountryCode = "za";
console.log(southAfricaCountryCode.toUpperCase());

/* Trim: Removing whitespace from the beginning and 
end of a string with .trim()*/
const paddedString = "    Hello, world!  ";
console.log(paddedString.trim());

// Replacing: Replacing part of a string using .replace().
const myBrother = "My brother is called Tafadzwa Mazenge";
console.log(myBrother.replace("Tafadzwa", "Frezar"));

//slice(start, end): Extracts a part of the string between the start and end indexes.
const str = "Freddy";
const slicedStr = str.slice(1, 4);
console.log(slicedStr);
console.log(str.substring(1, 4)); //substring and slice can work as one thing after all
const bio =
  "I am a passionate web developer who loves to learn new technologies and build cool projects.";
console.log(bio.slice(0, 31));

const fullNames = "Freddy Mazenge"; //We want to grab the first name from the full name
const myName = fullNames.substring(0, fullNames.indexOf(" "));
console.log(myName); //Here a method is inside another method
/*fullName.indexOf(' '): This finds the index (position) of the first space (' ') 
in the string, which is the separator between the first and last name. 
In this case, the space is at position 6.*/

//-------------------------------------------------------------------------------------------------

// ARRAYS - variables that are used to store multiple values
//Old and not used anymore method
const numbers = new Array(1, 2, 3, 4, 5);
const namez = new Array("Feddy", "Frezar", "Ng", "Mk");
console.log(namez);
console.log(numbers);
// Easier and used nowadays
const fruits = ["apples", "oranges", "bananas", "grapes"];
const namezz = ["Feddy", "Frezar", "Ng", "Mk"];
console.log(namezz);

console.log(fruits);
// We can have more than one data type in  an Array
const allDataTypes = ["string", true, 20, "#"];
console.log(allDataTypes);
// Properties of Arrays
//Lets' access orange from fruits then 20 from allDataTypes
console.log(namezz[0]);
console.log(fruits[1]);
console.log(allDataTypes[2]);
console.log(fruits);
// Let's push(the end)  and unshift(the beggining) new items to the fruits Array
fruits.push("mango"); //push adds mango to the end of the Array
namezz.push("Mona");
namezz.pop();
console.log(namezz);

//-----------------------------------------------------------------------------------------------

// Array.pop(),,One,, real life example
//An array of orders in a restaurant
const orders = ["burger", "pizza", "pasta", "salad"];
// The last order (salad) is ready to be served , so let's remove it
const servedOrder = orders.pop();
console.log(servedOrder);
console.log(orders);

/* Array.pop(),,Two,, If you’re building an application with an (Undo feature),
 you can use pop() to remove the most recent action from the list of actions
performed.*/
//// Array of actions the user has performed
const actions = ["Write", "Save", "Bold", "Underline"];
// The user decides to undo the last action ("Underline")
const undoneAction = actions.pop();
console.log(undoneAction);
console.log(actions);

//Array.pop(),,Three,,undo multiple times using pop()
// Array of actions the user has performed
const actionz = ["write", "save", "bold", "underline", "italic"];
const undoneActionz = []; //This is where will store the undone actions
//Undo the last 3 actions
undoneActionz.push(actionz.pop()); //Undo "italic"
undoneActionz.push(actionz.pop()); //Undo "underline"
undoneActionz.push(actionz.pop()); //Undo "bold"
console.log(undoneActionz);
console.log(actionz);

//Array.pop(),,Forth eg using LOOPS,,undo multiple times using pop()
//List of actions
const actionzz = [
  "Set alarm",
  "Check emails",
  "Social media post",
  "Call her boss",
  "Order coffee",
];
// We want to undo the last 3 actions
const numberOfUndos = 3;
const undoneActions = [];

for (let i = 0; i < numberOfUndos; i++) {
  undoneActions.push(actionzz.pop());
}
console.log(undoneActions);
console.log(actionzz);

//Array.pop(),,Fifth undo bulky actions
const actionsz = [
  { action: "Write", timestamp: "10:00 AM" },
  { action: "Save", timestamp: "10:05 AM" },
  { action: "Bold", timestamp: "10:10 AM" },
  { action: "Underline", timestamp: "10:15 AM" },
];
//Undo the last 2 actions
const undoneActionsz = actionsz.splice(-2); //Removes and returns the last 2 actions
console.log(undoneActionsz);
console.log(actionsz);

//---------------------------------------------------------------------------------------

//SPLICE    Splice().... going deeper
//Add, Removes and Replace elements in an array at any position
// Syntax
/* Array.splice(startIndex, deleteCount, item1, item2, ...); */

//1.REMOVING ELEMENTS
const fruitss = ["Apple", "Bananaz", "Mangoes", "Grapes", "Guavas", "Avocados"];
fruitss.splice(2, 3); //This says Start at index 2 and remove 3 items
console.log(fruitss); //Returnds ["Apple", "Bananaz","Avocados"]

//2.ADDING ELEMENTS
const fruitszz = [
  "Apple",
  "Bananaz",
  "Mangoes",
  "Grapes",
  "Guavas",
  "Avocados",
];
fruitszz.splice(1, 0, "Lemons", "RedBerries"); // Add "Lemons" and "RedBerries" at index 1
// without removing any item
console.log(fruitszz);

//3.REPLACING ELEMENTS
fruitszz.splice(0, 1, "Green Apple");
console.log(fruitszz);

//-----------------------------------------------------------------------------------------------

console.log(fruits);
fruits.unshift("guava"); //unshift adds guava at the start of the Array
console.log(fruits);
// Now Lets pop out someone at the end of our Array
fruits.pop(); //pop removes the last item from the Array
console.log(fruits);
// Let's check if  fruit is an Array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("guava"));

//------------------------------------------------------------------------------------------------

// OBJECT LITERALS
//it's all data types, arrays, strings, even nested objects the = is replaced by :
const person = {
  firstName: "Freddy", //String
  lastName: "Mazenge", //String
  age: 26, //Number
  hobbies: ["animation", "music", "graphics design", "photography"], //Array
  address: {
    //Nested Object
    street: "119 Augasta Road",
    city: "Johannesburg",
    state: "Gauteng",
  },
};

//DESTRUCTURING [Objects]...extracting(accesing) elements from objects/arrays and assign
//                          them to variables
//Why we need destructuring....accessing properties/elements without repetation
//.............................................................................................
//Without destructuring (repatation) , we have to use multiple lines (tiresome)
/*
const firstName = person.firstName;
const age = person.age;
const lastName = person.lastName;
const hobbies = person.hobbies[1]; 
*/

//With destructuring (avoids repetation),
const { firstName, lastName, hobbies } = person; //we used just one line (easy and quick) note {}
//................................................................................................

//Destructuring [Arrays]
//............................................................................
//Chaining the results...here we are accessing all properties of an object at once
const numberers = [10, 20, 30, 40];

//without destructuring // we have to use multiple lines (tiresome)
const first = numberers[0];
const second = numberers[1];

//with destructuring
const [firsst, seccond] = numbers; // we used just one line (easy and quick) note  []
/*
//ADDING NEW PROPERTIES TO AN OBJECT
//................................................................................................
//USING (Dot Notation)
person.email = "frezlax98@gmail.com";
//USING (Bracket Notation)
person["email"] = "frezlax98@gmail.com";
//Using Object.defineProperty
Object.defineProperties(person, "email", {
  value: "frezlax98@gmail.com",
  writable: true, // Can the value be changed?
  enumerable: true, //Will it show up in loops like for...in or Object.keys()?
  configerable: true, //Can the property be deleted or redefined?
});
*/
//................................
console.log(
  person.firstName,
  person.lastName,
  person.age,
  person.hobbies[1],
  person.address.state
);

const aPerson = {
  name: "Freddy",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log(`Hello , my name is ${this.name}`);
  },
};

//ACCESSING objects: (Dot notation or Bracket notation)
//...........................................................................
console.log(aPerson.name);
console.log(aPerson.age);
console.log(aPerson.isStudent);
console.log(aPerson.name);
console.log(aPerson);

//ADDING or Modifying properties: (Dot notation or Bracket notation)
//.............................................................................
aPerson.name = "Frezar";
aPerson.age = "14";
aPerson.isStudent = "false";
console.log(aPerson.name);
console.log(aPerson.age);
console.log(aPerson.isStudent);
console.log(aPerson.name);
console.log(aPerson);
console.log(aPerson);

// Properties of Objects
//first let's log the whole Object
console.log(person);
// now let's log individual items
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address);
// Now let's Access items inside the address object and inside the hobbies array
console.log(person.address.street);
console.log(person.hobbies[1]);
// Now let's chain these guys using a comma
console.log(person.firstName, person.lastName, person.age, person.hobbies);
console.log(person.firstName, person.lastName, person.address);
// Destructuring--pulling items out of the objects and use them as variables
/*const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName);
console.log(lastName);
console.log(city); */

//...............................................................................
// Let's add a property to our address
person.email = "freddymaz98@gmail.com";
person.favouriteMoviesSeries = "Dune";
person.favouriteAnimations = "Dragon Ball & Naruto";
person.religion = "Christianity";
person.siblings = ["Frezar", "Monalisa", "Makanaka", "Nigel", "Agnes", "Amina"];
person.parents = {
  mother: {
    name: "Tsitsi",
    surname: "Rutimu",
    birthPlace: "Mrewa",
    address: {
      city: "Buhera",
      state: "Zimbabwe",
    },
  },
  father: {
    name: "Kufa",
    surname: "Mazenge",
    birthPlace: "Buhera",
    address: {
      city: "Buhera",
      state: "Zimbabwe",
    },
  },
};
person.grandParent = {
  name: "Violet",
  surname: "Rutimu",
  age: 81,
  address: {
    city: "Mrewa",
    state: "Zimbabwe",
  },
};
console.log(person);

// let's create an Array of to-dos
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];
console.log(todos);
console.log(todos[1].text);

/* json- is a data format used when sending & receiving data to a server (used in
FullStack)..we send and receive data in json format...it is similar to object literals*/

// Say we want to convert the todos to Json, ready to send it to a server:
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//-----------------------------------------------------------------------------------------------

//LOOPING
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// while loop
let w = 0;
while (w < 10) {
  console.log(`While Loop: ${w}`);
  w++;
}

// LOOPING ARRAYS
for (let a = 0; a < todos.length; a++) {
  console.log(todos[a].text);
}
// a better for loop on Arrays
for (let todo of todos) {
  console.log(todo.id);
  console.log(todo.text);
  console.log(todo.isCompleted);
}
// HIGH ORDER ARRAY METHODS
// forEach, map, filter ...best way to deal with Arrays
// forEach...allows us to loop through Arrays
// map...allows us to create a new Array from an Array
// filter... allow us to create an Array based on a condition
/*They take in a callbackFunction as a Parameter...the Function's Parameter
 must always be the variable you want to use for each item*/
/*callbackFunction..A function that accepts up to three arguments*/

/* 
 General Syntax

1. forEach
arrayName.higherOrderArray(callBackFunction(variable,..,..){
  Your Code Here
}

2.map/filter
const mainVariable = arrayName.map/filter(callBackFunction(variable,..,..){ 
    return variable.arrayitem
})
    console.log(mainVariable)
*/

//  forEach
todos.forEach(function (tobedone) {
  console.log(tobedone.isCompleted);
});
// map
const todoMapText = todos.map(function (mapedText) {
  return mapedText.text;
});
console.log(todoMapText);
//filter
const todoFilterIsCompleted = todos.filter(function (filteredIsCompleted) {
  return filteredIsCompleted.id === 1;
});
console.log(todoFilterIsCompleted);

// Let's Chain The HIGH ORDER ARRAY METHODS
const todoCompleted = todos
  .filter(function (firstCondition) {
    return firstCondition.isCompleted === true;
  })
  .map(function (secondCondition) {
    return secondCondition.text;
  });
console.log(todoCompleted);

// CONDITIONAL STATEMENTS
// or..II   and...&&
const x = 5;
const y = 11;
if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}
// "10"...String, 10...Number
// ==...does not match data types "10" === 10
// ===...matches data types "10" is not equal to 10
if (x > 5 && y > 10) {
  console.log("x is more than 5 and y is more than 20");
}

// The TERNARY OPERATOR
const xx = 180;
const color = xx > 10 ? "red" : "blue";
/* Interpreting the code above....
   If x is greater than 10 then(?) color==red else(:) color==blue  */
console.log(color);

// SWITCH
// Combined the Ternary operato & the switch
const yy = 12;
const colors = yy > 10 ? "red" : "blue";

switch (colors) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;

  default:
    console.log("color is NOT red or blue");
    break;
}

// FUNCTIONS

// function declaration
function addNums(num1, num2) {
  return num1 + num2;
}
// function calling & parsing num1 and num2
console.log(addNums(40, 5));

// Arrow Functions
const addNumz = (numz1, numz2) => {
  return numz1 + numz2;
};
console.log(addNumz(5, 6));
