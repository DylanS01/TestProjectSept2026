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