console.log("Test");
document.getElementById("testdiv").innerHTML = "I changed this";

function consolePageLog(text){
    console.log(text);
    document.getElementById("textDisplay").innerHTML = document.getElementById("textDisplay").innerHTML + "\n" + text;
};

const promise = new Promise(function (resolve, reject) {
    const success = true;

    if (success) {
        resolve("Operation completed");
    } else {
        reject("Operation failed");
    }
});

promise.then(function (value) {
    document.getElementById("testdiv").innerHTML = "Promise succeeded";
    document.getElementById("testdiv").style.color = "#6fff00";
})
    .catch(function (error) {
        document.getElementById("testdiv").innerHTML = "Promise failed";
        document.getElementById("testdiv").style.color = "#ff0000";
    });

// in-class exercise 9/3
const width = 41;
const height = 34;
let area = width * height;
let doubled = area * 2;
let newArea = area / 5
let originalAreaIsGreater = false;

consolePageLog("Original area: " + (area));
consolePageLog("Doubled area: " + (area));
consolePageLog("Area divided by 5: " + (newArea));

if (area > newArea){
    originalAreaIsGreater = true;
}
consolePageLog(originalAreaIsGreater);

const testArray = ["Test1", "Test2", "Test3"];
const testObj = [car = "TestCar", color = "Black", year = "2000"];

const temperature = 90;
if (temperature > 82){
    consolePageLog("It's warm");
}
else{
    consolePageLog("It's cold");
}

const isWarm = temperature > 82 ? true : false;
consolePageLog("It's warm? " + isWarm);

consolePageLog("Basic for loop");
for (i in testArray){
    consolePageLog(testArray[i]);
}
consolePageLog("Conditional for loop");
for (i in testArray, i < testArray.length, i++){
    consolePageLog(testArray[i]);
}
consolePageLog("While loop");
let testValue1 = 0;
while (testValue1 < testArray.length){
    consolePageLog(testArray[testValue1]);
    testValue1 = testValue1 + 1;
}
consolePageLog("TestValue");
consolePageLog(testValue1);

consolePageLog("For of loop");
for (const i of testArray){
    // Only works with an array
    consolePageLog(i);
}

consolePageLog("Test Function");
function testFunction(input){
    input = input * 100;
    return input;
};

consolePageLog(testFunction(5));

class Student {
  constructor(name, enrolled, gpa) {
    this.name = name;
    this.enrolled = enrolled
    this.gpa = gpa;
  }
};

function passingCheck(student){
    if (student.gpa > 2){
        return "passing";
    }
    else
        return "not passing";
}

let roster = [];
let newStudent1 = new Student("Jack", true, 2.2);
roster.push(newStudent1);
consolePageLog(roster[0].name);

let randomGPA = Math.random() * 3;
let randomNames = ["John", "Abby", "Bob", "Tessa", "Jill"];
for (i in randomNames){
    let newStudent = new Student(randomNames[i], randomGPA, true);
    roster.push(newStudent);
}
for (i in roster){
    consolePageLog(i.name);
}