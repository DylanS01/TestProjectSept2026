console.log("Test");
document.getElementById("testdiv").innerHTML = "I changed this";

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

document.getElementById("numberdisplay").innerHTML = 50;
// Test Change

const width = 41;
const height = 34;
let area = width * height;
let doubled = area * 2;
let newArea = area / 5
let originalAreaIsGreater = false;

console.log("original area: " + (area));
console.log("doubled area: " + (area));
console.log("area divided by 5: " + (newArea));

if (area > newArea){
    originalAreaIsGreater = true;
}
console.log(originalAreaIsGreater);