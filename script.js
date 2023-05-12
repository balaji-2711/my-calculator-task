//to create title
let a = document.createElement("h1");
a.innerHTML = "Calculator task";
a.setAttribute("id", "title");
document.body.append(a);


//to create description
let b = document.createElement("p");
b.innerHTML = "I make the calculations quicker and easier";
b.setAttribute("id", "description");
document.body.append(b);

//to create main container
let container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

//to create parent div for input 
let box = document.createElement("div");
box.setAttribute("id", "box");
container.append(box);

//to create input to display the calculations
let ele = document.createElement("input");
ele.setAttribute("id", "result");
ele.setAttribute('placeholder','0');
box.append(ele);

let br1 = document.createElement("br");
box.append(br1);

//to create container for buttons
let content = document.createElement("div");
content.setAttribute("class", "content");
box.append(content);

//to create buttons and adding event for it
let c = document.createElement("button");
c.setAttribute("type", "button");
c.setAttribute("onclick", "Clear(this)");
c.setAttribute("id", "clear");
c.innerText = "C";
content.append(c);

let back = document.createElement("button");
back.setAttribute("type", "button");
back.setAttribute("onclick", "Backwards(this)");
back.innerText = "<-";
content.append(back);

let dot = document.createElement("button");
dot.setAttribute("type", "button");
dot.setAttribute("onclick", "Dot(this)");
dot.innerText = ".";
content.append(dot);

let multiply = document.createElement("button");
multiply.setAttribute("type", "button");
multiply.setAttribute("onclick", "Multiplication(this)");
multiply.innerText = "*";
content.append(multiply);

let br2 = document.createElement("br");
content.append(br2);

//to create buttons for numbers and operation 
//I have also created onclick event if you want to use the buttons by onclick
//Or-else you can do using key board events by entering the calculations inside the display text area
let button7 = document.createElement("button");
button7.setAttribute("type", "button");
button7.setAttribute("onclick", "seven(this)");
button7.setAttribute("id", "7");
button7.innerText = "7";
content.append(button7);

let button8 = document.createElement("button");
button8.setAttribute("type", "button");
button8.setAttribute("onclick", "eight(this)");
button8.setAttribute("id", "8");
button8.innerText = "8";
content.append(button8);

let button9 = document.createElement("button");
button9.setAttribute("type", "button");
button9.setAttribute("onclick", "nine(this)");
button9.setAttribute("id", "9");
button9.innerText = "9";
content.append(button9);

let divide = document.createElement("button");
divide.setAttribute("type", "button");
divide.setAttribute("onclick", "Division()");
divide.innerText = "/";
content.append(divide);

let br3 = document.createElement("br");
content.append(br3);

let button4 = document.createElement("button");
button4.setAttribute("type", "button");
button4.setAttribute("onclick", "four(this)");
button4.setAttribute("id", "4");
button4.innerText = "4";
content.append(button4);

let button5 = document.createElement("button");
button5.setAttribute("type", "button");
button5.setAttribute("onclick", "five(this)");
button5.setAttribute("id", "5");
button5.innerText = "5";
content.append(button5);

let button6 = document.createElement("button");
button6.setAttribute("type", "button");
button6.setAttribute("onclick", "six(this)");
button6.setAttribute("id", "6");
button6.innerText = "6";
content.append(button6);

let sub = document.createElement("button");
sub.setAttribute("type", "button");
sub.setAttribute("id", "subtract");
sub.setAttribute("onclick", "Subtraction(this)");
sub.innerText = "-";
content.append(sub);

let br4 = document.createElement("br");
content.append(br4);

let button1 = document.createElement("button");
button1.setAttribute("type", "button");
button1.setAttribute("onclick", "one(this)");
button1.setAttribute("id", "1");
button1.innerText = "1";
content.append(button1);

let button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.setAttribute("onclick", "two(this)");
button2.setAttribute("id", "2");
button2.innerText = "2";
content.append(button2);

let button3 = document.createElement("button");
button3.setAttribute("type", "button");
button3.setAttribute("onclick", "three(this)");
button3.setAttribute("id", "3");
button3.innerText = "3";
content.append(button3);

let add = document.createElement("button");
add.setAttribute("type", "button");
add.setAttribute("id", "add");
add.setAttribute("onclick", "Addition(this)");
add.innerHTML = "+";
content.append(add);

let br5 = document.createElement("br");
content.append(br5);

let button0 = document.createElement("button");
button0.setAttribute("type", "button");
button0.setAttribute("onclick", "zero(this)");
button0.setAttribute("id", "0");
button0.innerText = "0";
content.append(button0);

let button00 = document.createElement("button");
button00.setAttribute("type", "button");
button00.setAttribute("onclick", "zz(this)");
button00.setAttribute("id", "00");
button00.innerText = "00";
content.append(button00);

let equal = document.createElement("button");
equal.setAttribute("type", "button");
equal.setAttribute("id", "equal");
equal.setAttribute("onclick", "Equalize(this)");
equal.innerText = "=";
content.append(equal);

let inp = document.querySelector("#result");
//functions for number buttons
let seven = (e) => {
  inp.value += "7";
  console.log(e);
};

let eight = (e) => {
  console.log(e);
  inp.value += "8";
};

let nine = (e) => {
  console.log(e);
  inp.value += "9";
};

let four = (e) => {
  console.log(e);
  inp.value += "4";
};

let five = (e) => {
  console.log(e);
  inp.value += "5";
};

let six = (e) => {
  console.log(e);
  inp.value += "6";
};

let one = (e) => {
  console.log(e);
  inp.value += "1";
};

let two = (e) => {
  console.log(e);
  inp.value += "2";
};

let three = (e) => {
  console.log(e);
  inp.value += "3";
};

let zero = (e) => {
  console.log(e);
  inp.value += "0";
};

let zz = (e) => {
  console.log(e);
  inp.value += "00";
};

//function for mathematical operation
let Equalize = (e) => {
  inp.value = eval(inp.value);
  console.log(e);
};

let Clear = (e) => {
  inp.value = "";
  console.log(e);
};

let Addition = (e) => {
  inp.value += "+";
  console.log(e);
};

let Subtraction = (e) => {
  inp.value += "-";
  console.log(e);
};

let Division = (e) => {
  inp.value += "/";
  console.log(e);
};

let Dot = (e) => {
  inp.value += ".";
  console.log(e);
};

let Multiplication = (e) => {
  inp.value += "*";
  console.log(e);
};

let Backwards = (e) => {
  inp.value = inp.value.slice(0, -1);
  console.log(e);
};

 //to alert if any characters pressed other than numbers and the below mentioned characters
document.querySelector("#result").onkeypress = (e) => {
  if (e.key == "Enter") {
    Equalize();
  } else if (
    !(
      e.key >= 0 ||
      e.key <= 9 ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "/" ||
      e.key === "*" ||
      e.key == "."
    )
  ) {
   
    alert("Enter numbers only");
    e.preventDefault();
  }
};
