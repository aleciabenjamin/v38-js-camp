const eventName = "Primavera Sound";
let ticketCount = 0;
const isVip = false;

console.log(eventName);
console.log(eventName);

ticketCount = 10;
console.log(ticketCount);
console.log(isVip);

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}
const travel = totalMinutes(2, 15);
console.log(travel);

const isMember = true;
let shipping = 79;

if (isMember === true) {
  shipping = 0;
} else {
  console.log("Ordinarie frakt");
}
console.log(shipping);

const cities = ["Malmö", "Göteborg", "Umeå"];
console.log(cities[0]);
console.log(cities.length);

const product = { title: "Hörlurar", stock: 4, inStock: true };
console.log(product.title);
console.log(product.inStock);

for (const city of cities) {
  console.log(city);
}

const tempC = 25;

if (tempC >= 20) {
  console.log("varmt");
} else if (tempC >= 10) {
  console.log("ljummet");
} else {
  console.log("kallt");
}

const routes = ["Linje 2", "Linje 5", "Linje 8"];

for (route of routes) {
  console.log("Avgår: " + route);
}

function triple(n) {
  return n * 3;
}
console.log(triple(8));
//const triple = (n) => n * 3; // samma jobb, annan stavning
