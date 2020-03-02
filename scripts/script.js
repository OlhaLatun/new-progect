function lightIsOn() {
  const bulb = document.getElementsByClassName("fas fa-lightbulb")[0];
  bulb.style.color = "yellow";

  const text = document.getElementsByTagName("h1")[0];
  text.innerHTML = "Bulb is: ON";
  text.style.color = "black";

  const background = document.getElementsByTagName("body")[0];
  background.style.backgroundColor = "white";
}

function lightIsOff() {
  const bulb = document.getElementsByClassName("fas fa-lightbulb")[0];
  bulb.style.color = "black";

  const text = document.getElementsByTagName("h1")[0];
  text.innerHTML = "Bulb is: OFF";
  text.style.color = "white";

  const background = document.getElementsByTagName("body")[0];
  background.style.backgroundColor = "grey";
}
