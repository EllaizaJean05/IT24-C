function updateDisplay(){
    let textbox = document.getElementById("textbox");
    let displayText = document.getElementById("display");

    displayText.textContent = textbox.value;

}