const ingredients = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    let domString = ``;
    arrayToPrint.forEach((ingredient) => {
        domString += `<div class="card col-8">`
        domString +=    `<div class="card-body">`
        domString +=      `<h5 class="card-title">Card title</h5>`
        domString +=      `<a href="#" class="btn btn-primary">Delete</a>`
        domString +=    `</div>`
        domString += `</div>`
    })
    printToDom('ingredient-container', domString);
}

const addIngredient = () => {
    const inputText = document.getElementById("ingredientInput").value;
    const newIngredient = {
        item: inputText,
    }
    ingredients.push(newIngredient);
    domStringBuilder(ingredients);
    document.getElementById('ingredientInput').value = ``;
}

const eventListeners = () => {
    document.getElementById('addButton').addEventListener("click", addIngredient);
}

const init = () => {
    eventListeners();
};

init();