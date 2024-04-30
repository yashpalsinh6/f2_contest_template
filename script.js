/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(arr => arr.profession === "developer");
  developers.map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.profession === "developer") {
        console.log(arr);
    }
});
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);

    console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(arr=> arr.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let employees2 = [
    { id: 4, name: "susan", age: "22", profession: "designer" },
    { id: 5, name: "emma", age: "21", profession: "manager" },
    { id: 6, name: "mike", age: "25", profession: "engineer" }
];
const concatenatedArray = arr.concat(employees2);
console.log(concatenatedArray);
}
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();