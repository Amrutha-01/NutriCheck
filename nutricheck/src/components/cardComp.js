import React, { useEffect, useState } from "react";
import CardItems from "./cardItems";
import "./index.css";

function CardComp() {
  const imagUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  // const url=`https://api.spoonacular.com/recipes/${key}/information?includeNutrition=false`
  const [cards, setcards] = useState([]);
  useEffect(() => {
    fetch(imagUrl)
      //extracts the JSON data from the response object
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.meals);
        setcards(data.meals);
      })
      .catch((error) => console.log(error));
  }, []);
  // useEffect(() => {
  //   fetch("https://api.spoonacular.com/recipes/analyze")
  //     //extracts the JSON data from the response object
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setcards(data.meals);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <main className="cards-container">
      {cards.map((meal) => (
        <CardItems
          url={meal.strMealThumb}
          title={meal.strMeal}
          key={meal.idMeal}
        />
      ))}
    </main>
  );
}

export default CardComp;
