console.log("whats up");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const addIngredient = () => {
    const inputText = document.getElementById("ingredientInput").value;
    printToDom('ingredient-container', inputText);
    document.getElementById('ingredientInput').value = ``;
}

const eventListeners = () => {
    document.getElementById('addButton').addEventListener("click", addIngredient);
}

const init = () => {
    eventListeners();
};

init();