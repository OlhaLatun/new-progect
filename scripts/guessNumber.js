let randomNumber;

function init() {
  randomNumber = getRandomNumber(10);
  console.log(randomNumber);
  const input = document.getElementById("checkField");
  const p = document.getElementsByTagName("p")[0];
  const button = document
    .getElementById("checkBtn")
    .addEventListener("click", () => {
      checkNumber(input.value, randomNumber);
    });

  function checkNumber(value, number) {
    if (value == "") {
      alert("You forgot to write a number!");
    } else {
      if (value > number) {
        p.innerHTML = "Your number is greater than Random Number ";
        p.className = "wrong";
      } else if (value < number) {
        p.innerHTML = "Your number is less than Random Number";
        p.className = "wrong";
      } else {
        p.innerHTML = `You won! Random number is ${number}`;
        p.className = "right";
        input.value = "";
        randomNumber = getRandomNumber(10);
        console.log("New" + " " + randomNumber);
      }
    }
  }
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
