const ingredients = [];
let ingredientCounter = 1;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const deleteFunction = (e) => {
    ingredients.forEach((ingredient, index) => {
        if (e.target.id === ingredient.id) {
            ingredients.splice(index, 1);
        };
    });
    domStringBuilder(ingredients);
    addDeleteEvents();
}

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName("deleteButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteFunction);
    };
};


const domStringBuilder = (arrayToPrint) => {
    let domString = ``;
    arrayToPrint.forEach((ingredient) => {
        domString += `<div class="card col-8">`
        domString +=    `<div class="card-body">`
        domString +=      `<h5 class="card-title">${ingredient.item}</h5>`
        domString +=      `<a class="btn btn-danger deleteButton" style="cursor: pointer;"id="${ingredient.id}">Delete</a>`
        domString +=    `</div>`
        domString += `</div>`
    });

    printToDom('ingredient-container', domString);
}

const addIngredient = () => {
    const inputText = document.getElementById("ingredientInput").value;
    const newIngredient = {
        item: inputText,
        id: `ingredient${ingredientCounter}`
    }
    ingredients.push(newIngredient);
    ingredientCounter++;
    domStringBuilder(ingredients);
    addDeleteEvents();
    document.getElementById('ingredientInput').value = ``;
}

const eventListeners = () => {
    document.getElementById('addButton').addEventListener("click", addIngredient);
}

const init = () => {
    eventListeners();
};

init();