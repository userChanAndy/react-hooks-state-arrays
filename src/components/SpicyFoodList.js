import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    console.log(newFood);
  }

  const foodList = foods.map(food => (
    <li key = {food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{/* list of spicy foods */}
      {foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
