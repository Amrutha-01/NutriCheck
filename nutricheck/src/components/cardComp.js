import React, { useEffect, useState } from "react";
import CardItems from "./cardItems";

function CardComp({ onViewMoreClick }) {
  const ids = [
    636278, 640314, 637761, 1082038, 7657, 654959, 648506, 640323, 663252,
    643061, 658482, 654495, 654059, 1697815, 636488, 69095,
  ];
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const promises = ids.map((id) =>
        fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=a98d8cde9d6e41ff91d3715cde7148f4`
        )
          .then((response) => response.json())
          .catch((error) => {
            console.error(`Error fetching data for ID ${id}:`, error);
            return null;
          })
      );

      Promise.all(promises).then((dataArray) => {
        const fetchedCards = dataArray.filter((data) => data && data.id);
        setCards(fetchedCards);
      });
    };

    fetchData();
  }, []);

  return (
    <main className="cards-container">
      {cards.map((meal) => (
        <CardItems
          url={meal.image}
          title={meal.title}
          id={meal.id}
          key={meal.id}
          // onViewMoreClick={onViewMoreClick}
        />
      ))}
    </main>
  );
}

export default CardComp;
