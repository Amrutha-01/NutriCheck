import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ViewMoreData() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedItemTitle = searchParams.get("title");

  const [VMapiData, setVMApiData] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${selectedItemTitle}&apiKey=a98d8cde9d6e41ff91d3715cde7148f4`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            setVMApiData(data.results[0]);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchRecipe();
  }, [selectedItemTitle]);

  useEffect(() => {
    if (VMapiData) {
      fetch(
        `https://api.spoonacular.com/recipes/${VMapiData.id}/summary?apiKey=a98d8cde9d6e41ff91d3715cde7148f4`
      )
        .then((response) => response.json())
        .then((data) => {
          const summary = data.summary;
          const summaryElement = document.getElementById("summary");
          if (summaryElement) {
            summaryElement.innerHTML = summary;
          }
        })
        .catch((error) => {
          console.error("Error fetching summary:", error);
        });
    }
  }, [VMapiData]);

  if (!VMapiData) {
    return <div>Loading...</div>;
  }

  const nutriImgUrl = `https://api.spoonacular.com/recipes/${VMapiData.id}/nutritionWidget.png?apiKey=a98d8cde9d6e41ff91d3715cde7148f4`;

  return (
    <div className="VMclass">
      <h1>{VMapiData.title}</h1>
      <div className="VMimgsum">
      <img src={VMapiData.image} alt={VMapiData.title} />
      <p id="summary"></p>
      </div>
      <img src={nutriImgUrl} alt="Nutrition" />
    </div>
  );
}

export default ViewMoreData;
