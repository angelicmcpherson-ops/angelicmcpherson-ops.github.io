// -----------------------------
// UTILITIES
// -----------------------------
function $(id) {
  return document.getElementById(id);
}

// -----------------------------
// COOKIE FAVORITE INTERACTION
// -----------------------------
const cookieInput = $("cookieInput");
const cookieBtn = $("cookieBtn");
const cookieResult = $("cookieResult");

if (cookieBtn && cookieInput && cookieResult) {
  cookieBtn.addEventListener("click", () => {
    const cookie = cookieInput.value.trim();

    if (cookie === "") {
      cookieResult.textContent =
        "Hmm… you’ve gotta have a favorite cookie 👀";
      return;
    }

    cookieResult.textContent = `Excellent choice. ${cookie} cookies are a classic around here 🍪`;
    cookieInput.value = "";
  });
}

// -----------------------------
// FUN FACT GENERATOR
// -----------------------------
const factBtn = $("fact-btn");
const factText = $("fact");

const bakingFacts = [
  "Chocolate chip cookies were invented by accident in the 1930s.",
  "Brown sugar makes cookies chewier than white sugar.",
  "Resting cookie dough improves flavor and texture.",
  "Butter temperature can completely change a cookie’s texture.",
  "The smell of baking cookies can trigger nostalgia and comfort."
];

if (factBtn && factText) {
  factBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * bakingFacts.length);
    factText.textContent = bakingFacts[randomIndex];
  });
}

// // -----------------------------
// // BUTTON MICRO-ANIMATION
// // -----------------------------
// const buttons = document.querySelectorAll(".cta-btn");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     button.classList.add("clicked");

//     setTimeout(() => {
//       button.classList.remove("clicked");
//     }, 150);
//   });
// });
