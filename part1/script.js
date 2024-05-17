//max min

function maxMin() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  const min = Math.min(num1, num2, num3);
  const max = Math.max(num1, num2, num3);

  document.getElementById("minMaxResult").innerHTML = `
  <p>Max element = ${max}</p>
  <p>Min element = ${min}</p>
  `;
  console.log("Max Value is:" + max);
  console.log("Min Value is:" + min);
}

//VowelCheck

function vowelCheck() {
  const input = document.getElementById("char").value;

  let x = input.toLowerCase();
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
    document.getElementById("check").innerHTML = `
    <p>${input} is a Vowel</p>
    `;
  } else {
    document.getElementById("check").innerHTML = `
  <p>${input} is a Consonant</p>
  `;
  }
}

//mutliplication function

function multiplication() {
  const x = parseInt(document.getElementById("multi").value);
  let output = "";
  for (let i = 1; i <= 12; i++) {
    let y = x * i;
    output += y + " ";
  }
  document.getElementById("multiResult").innerHTML = `<p>${output}</p>`;
}

//print all the even numbers between 1 and a given number

function printEven() {
  const x = parseInt(document.getElementById("even").value);

  let output = "";
  for (let i = 1; i <= x; i++) {
    if (i % 2 == 0) {
      output += i + " ";
    }
  }
  document.getElementById("printEven").innerHTML = `<p>${output}</p>`;
}

printEven();

//Average/percentage

function calculate() {
  let a = parseInt(document.getElementById("number1").value);
  let b = parseInt(document.getElementById("number2").value);
  let c = parseInt(document.getElementById("number3").value);
  let d = parseInt(document.getElementById("number4").value);
  let e = parseInt(document.getElementById("number5").value);

  let total = a + b + c + d + e;
  let avg = total / 5;
  let percentage = (total / 500) * 100;
  document.getElementById(
    "checkPer"
  ).innerHTML = `<p>"Total marks: " ${total}</p>
  <p>Average:  ${avg}</p>
  <p>Percentage:  ${percentage}</p>`;
}

//Grade

function grade() {
  let a = parseInt(document.getElementById("grade1").value);
  let b = parseInt(document.getElementById("grade2").value);
  let c = parseInt(document.getElementById("grade3").value);
  let d = parseInt(document.getElementById("grade4").value);
  let e = parseInt(document.getElementById("grade5").value);

  let total = a + b + c + d + e;
  let percentage = (total / 500) * 100;
  if (percentage >= 90) {
    document.getElementById("grade").innerHTML = `
    <p>Grade A</p>
    <p>percentage: ${percentage}</p>
    `;
  } else if (percentage < 90 && percentage >= 80) {
    document.getElementById("grade").innerHTML = `
  <p>Grade B</p>
  <p>percentage: ${percentage}</p>
  `;
  } else if (percentage < 80 && percentage >= 70) {
    document.getElementById("grade").innerHTML = `
    <p>Grade C</p>
    <p>percentage: ${percentage}</p>
    `;
  } else if (percentage < 70 && percentage >= 60) {
    document.getElementById("grade").innerHTML = `
    <p>Grade D</p>
    <p>percentage:  ${percentage}</p>
    `;
  } else if (percentage < 60 && percentage >= 50) {
    document.getElementById("grade").innerHTML = `
    <p>Grade E</p>
    <p>percentage: ${percentage}</p>
    `;
  } else {
    document.getElementById("grade").innerHTML = `
    <p>Grade F</p>
    <p>percentage: ${percentage}</p>
    `;
  }
}
