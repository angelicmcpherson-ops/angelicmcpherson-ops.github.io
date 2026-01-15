// // Update the heading text to be in Spanish
// let title = document.querySelector("h1");
// title.innerText = "Hola, me llamo Angelic";
// // title.innerHTML = "<em>Hola, me llamo Angelic</em>";
// title.style.color = "black";

// Add a button!
const factBtn = document.querySelector("#fact-btn");
const fact = document.querySelector("#fact");

// When the user clicks on it, it will display a fun fact about me!
factBtn.addEventListener("click", function() {
  fact.innerText = "Fun Fact: My favorite cookie is the cookies and cream cookie!! Delicious!";
  fact.style.color = "#d14abf";  // matches your pink theme
  fact.style.fontWeight = "bold";
});

// Cookies
const cookieInput = document.querySelector("#cookieInput");
const cookieBtn = document.querySelector("#cookieBtn");
const cookieResult = document.querySelector("#cookieResult");

cookieBtn.addEventListener("click", function() {
  const cookie = cookieInput.value.toLowerCase();

  if (cookie === "cookies and cream") {
    cookieResult.innerText = "Great taste! That’s Angelic’s favorite too 🍪";
  } else if (cookie === "chocolate chip") {
    cookieResult.innerText = "Classic choice! You can never go wrong 😋";
  } else if (cookie === "sugar") {
    cookieResult.innerText = "Sweet and simple — love it 💖";
  } else if (cookie === "") {
    cookieResult.innerText = "Type in a cookie first!";
  } else {
    cookieResult.innerText = "Yum! That sounds delicious!";
  }
});

// all of the links
const links = document.querySelectorAll("a");

for (let link of links) {
  link.style.color = "#ff66b3";
  link.style.fontWeight = "bold";
  link.style.textDecoration = "none";
}

// all the headers
const headers = document.querySelectorAll("h1, h2");

for (let i = 0; i < headers.length; i++) {
  headers[i].style.color = "#d14abf";
  headers[i].style.fontFamily = "cursive";
}

// String to Number
function stringToNumber(text) {
  let sum = 0;

  for (let char of text.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      sum += char.charCodeAt(0) - 96;
    }
  }

  return sum % 256;
}

// Number to hex color
function toHex(num) {
  return num.toString(16).padStart(2, "0");
}

// Generate the color
function generateColor(animal, song, movie) {
  const r = stringToNumber(animal);
  const g = stringToNumber(song);
  const b = stringToNumber(movie);

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// tie it all together
const button = document.querySelector("#submit");
const span = document.querySelector("span");

button.addEventListener("click", function () {
  const animal = document.querySelector("#animal").value;
  const song = document.querySelector("#song").value;
  const movie = document.querySelector("#movie").value;

  const color = generateColor(animal, song, movie);

  span.style.backgroundColor = color;
});


