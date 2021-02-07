// Search for food
const searchAction = searchValue => {
    const searchContent = document.getElementById('search-input').value;
    if(searchContent === ""){
        alert('Please write something');
    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchContent}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));
    }
    
}

// Display food item function
const displayFoods = foodItems => {
    if(foodItems === null){
        document.getElementById('food-details').innerHTML = "";
        document.getElementById('food-container').innerHTML = '<p>No food Found!</p>';
    }
    else{
        const foodContainer = document.getElementById('food-container');
        foodContainer.innerHTML = "";
        document.getElementById('food-details').innerHTML = "";
        foodItems.forEach(mealsList => {
            const foodItemDiv = document.createElement('div');
            foodItemDiv.className = 'food-items';
            const mealInfo = `
                <div onclick="displayFoodDetails('${mealsList.idMeal}')">
                <img src="${mealsList.strMealThumb}" alt="">
                <p>${mealsList.strMeal}</p>
                </div>
            `;
            foodItemDiv.innerHTML = mealInfo;
            foodContainer.appendChild(foodItemDiv);
        });
        
    }

}

// display single item details
const displayFoodDetails = FoodID => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${FoodID}`
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data.meals[0]));
}
const foodDetails = myMeals => {
    const foodDetailsDiv = document.getElementById('food-details');
    foodDetailsDiv.innerHTML = `
        <div class="display-image"><img src="${myMeals.strMealThumb}" alt=""></div>       
        <h2>${myMeals.strMeal}</h2>
        <h5>Ingredients</h5>
        <ul>
            <li>${myMeals.strMeasure1 + " " + myMeals.strIngredient1}</li>
            <li>${myMeals.strMeasure2 + " " + myMeals.strIngredient2}</li>
            <li>${myMeals.strMeasure3 + " " + myMeals.strIngredient3}</li>
            <li>${myMeals.strMeasure4 + " " + myMeals.strIngredient4}</li>
            <li>${myMeals.strMeasure5 + " " + myMeals.strIngredient5}</li>
            <li>${myMeals.strMeasure6 + " " + myMeals.strIngredient6}</li>
            <li>${myMeals.strMeasure7 + " " + myMeals.strIngredient7}</li>
            <li>${myMeals.strMeasure8 + " " + myMeals.strIngredient8}</li>
            <li>${myMeals.strMeasure9 + " " + myMeals.strIngredient9}</li>
            <li>${myMeals.strMeasure10 + " " + myMeals.strIngredient10}</li>
        </ul>

        `
        // Empty list item remove
        let emptyList = document.getElementsByTagName('li');
        for (let i = 0; i < emptyList.length; i++) {
            const element = emptyList[i];
            if(element.innerText === ''){
                element.style.display = 'none';
            }
            
        }
        
}

