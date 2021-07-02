document.getElementById("buttonId").addEventListener("click", () => {
    const input = document.getElementById("inputId");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
        .then(res => res.json())
        .then(data => {
            const meals = data.meals;
            const cardsGroup = document.getElementById("cardsGroup");
            cardsGroup.innerHTML = "";
            for (let i = 0; i < meals.length; i++) {
                const element = meals[i];
                const createDiv = document.createElement("div");
                createDiv.className = "col";
                const divInfo = `
        <div class="card">
                <img src="${meals[i].strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" style="text-align:center">${meals[i].strMeal}</h5>
                </div>
              </div>
        `;
                createDiv.innerHTML = divInfo;
                cardsGroup.appendChild(createDiv);
                createDiv.addEventListener("click", () => {
                    document.getElementById("divId").style.display = "block";
                    document.getElementById("imgId").src = meals[i].strMealThumb;
                    document.getElementById("headerId").innerText = meals[i].strMeal;
                    addIngredientList(meals[i]);

                });
            }
        });
});

function addIngredientList(meal) {
    const parentList = document.getElementById("detailsDiv");
    parentList.innerHTML = "";
    let ingredients = [];
    let measure = [];

    if (meal.strIngredient1) {
        ingredients.push(meal.strIngredient1);
        measure.push(meal.strMeasure1)
    }
    if (meal.strIngredient2) {
        ingredients.push(meal.strIngredient2);
        measure.push(meal.strMeasure2)
    }
    if (meal.strIngredient3) {
        ingredients.push(meal.strIngredient3);
        measure.push(meal.strMeasure3)
    }
    if (meal.strIngredient4) {
        ingredients.push(meal.strIngredient4);
        measure.push(meal.strMeasure4)
    }
    if (meal.strIngredient5) {
        ingredients.push(meal.strIngredient5);
        measure.push(meal.strMeasure5)
    }
    if (meal.strIngredient6) {
        ingredients.push(meal.strIngredient6);
        measure.push(meal.strMeasure6)
    }
    if (meal.strIngredient7) {
        ingredients.push(meal.strIngredient7);
        measure.push(meal.strMeasure7)
    }
    if (meal.strIngredient8) {
        ingredients.push(meal.strIngredient8);
        measure.push(meal.strMeasure8)
    }
    if (meal.strIngredient9) {
        ingredients.push(meal.strIngredient9);
        measure.push(meal.strMeasure9)
    }
    if (meal.strIngredient10) {
        ingredients.push(meal.strIngredient10);
        measure.push(meal.strMeasure10)
    }
    if (meal.strIngredient11) {
        ingredients.push(meal.strIngredient11);
        measure.push(meal.strMeasure11)
    }
    if (meal.strIngredient12) {
        ingredients.push(meal.strIngredient12);
        measure.push(meal.strMeasure12)
    }
    if (meal.strIngredient13) {
        ingredients.push(meal.strIngredient13);
        measure.push(meal.strMeasure13)
    }
    if (meal.strIngredient14) {
        ingredients.push(meal.strIngredient14);
        measure.push(meal.strMeasure14)
    }
    if (meal.strIngredient15) {
        ingredients.push(meal.strIngredient15);
        measure.push(meal.strMeasure15)
    }
    if (meal.strIngredient16) {
        ingredients.push(meal.strIngredient16);
        measure.push(meal.strMeasure16)
    }
    if (meal.strIngredient17) {
        ingredients.push(meal.strIngredient17);
        measure.push(meal.strMeasure17)
    }
    if (meal.strIngredient18) {
        ingredients.push(meal.strIngredient18);
        measure.push(meal.strMeasure18)
    }
    if (meal.strIngredient19) {
        ingredients.push(meal.strIngredient19);
        measure.push(meal.strMeasure19)
    }
    if (meal.strIngredient20) {
        ingredients.push(meal.strIngredient20);
        measure.push(meal.strMeasure20)
    }
    for (let i = 0; i < ingredients.length; i++) {
        const p = document.createElement("p");
        p.className = 'liItem;'
        p.innerText = measure[i] + " " + ingredients[i];
        parentList.appendChild(p);
    }
}