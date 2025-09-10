function updateDisplay() {
     let textbox = document.getElementById("textbox");
  let displaytext = document.getElementById("display");

  displaytext.textContent = textbox.value;
}

let quotes = [
    "Everything happens for a reason",
    "GOD is with you, you will not fall",
    "You only live once, but if you do it right, once is enough.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Our love is like Git — it only grows with every commit."
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  
    const quoteOutput = document.getElementById("quoteOutput");
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
});
