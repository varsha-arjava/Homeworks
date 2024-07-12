
// For loop

const Names = ["varsha", "kavya", "lakmi", "bavani"];
let nameval = "";

for (let i = 0; i < Names.length; i++) {
  nameval += Names[i] + "<br>";
}
document.getElementById("for_output").innerHTML = nameval;
//  While loop

let i = 0;
Num = "";
while (i < 5) {
  Num += "The number is " + i + "<br>";
  i++;
  console.log(Num)
}
document.getElementById("while_output").innerHTML = Num;
// if condition


if (i <= 5) {
  document.getElementById("if_output").innerHTML = "<b>i</b> value is lessthan 5";
    console.log("i value is lessthan 5")
} else {
  document.getElementById("if_output").innerHTML = "<b>i</b> value is greaterthan 5";
    console.log("i value is greaterthan 5")
}
// switch case

let color = "Red";
switch (color) {
  case 0:
    color = "Blue";
    break;
  case 1:
    color = "Black";
    break;
  case 2:
    color = "Red";
}
console.log(color)
document.getElementById("switch_output").innerHTML = color;

// Arrow function

let addFunction = (a, b) => document.getElementById("arrow_output").innerHTML = (a + b);
addFunction(3, 5);

