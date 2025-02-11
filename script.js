// Searching
// Filtering
//
// Water ->

var courses = [
  {
    duration: 1,
    price: 499,
  },
  {
    duration: 2,
    price: 599,
  },
  {
    duration: 3,
    price: 399,
  },
  {
    duration: 4,
    price: 399,
  },
  {
    duration: 5,
    price: 450,
  },
  {
    duration: 6,
    price: 700,
  },
  {
    duration: 4,
    price: 400,
  },
  {
    duration: 2,
    price: 200,
  },
];

// console.log(courses);

const filterdCourses = [];

const priceFilter = prompt("Enter price:");

for (let i = 0; i < courses.length; i++) {
  if (courses[i].price <= priceFilter) {
    filterdCourses.push(courses[i]);
    //
  }
}

// console.log(i);

console.log(window.courses);

// console.log(filterdCourses);

// console.log(window);

function printSomething(message) {
  alert(`Message ${message}`);
}

printSomething("Ajker class shes");
