import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchResultPage({ apiData }) {
    const result = apiData.results[0];
    fetch(`https://api.spoonacular.com/recipes/${result.id}/summary?apiKey=a98d8cde9d6e41ff91d3715cde7148f4`)
      .then((response) => response.json())
      .then((data) => {
        const summ = data.summary; // Accessing the summary directly from the object
        const summaryElement = document.getElementById("summary");
        if (summaryElement) {
          summaryElement.innerHTML = summ;
        }
      })
      .catch((error) => {
        console.error("Error fetching summary:", error);
      });
  
      const nutriImgUrl=`https://api.spoonacular.com/recipes/${result.id}/nutritionWidget.png?apiKey=a98d8cde9d6e41ff91d3715cde7148f4`;
  return (
      <div>
        <h1>{result.title}</h1>
        <div className="VMimgsum">
        <img src={result.image}/>
        <p id="summary"></p>
        </div>
        <img src={nutriImgUrl} />
      </div>
  );
}

export default SearchResultPage;


