import React, { useState } from "react";
import "./index.css";
// import CardsPage from "./CardsPage.JS";
import SearchResultPage from "./searchResultPage.js";
import { useNavigate, Link } from "react-router-dom";

function SearchComp() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("working");
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${title}&apiKey=5fcf67dd875a486f98ab89401623bd52`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // navigate("/searchResultPage");
  }
  return (
    <header>
      <img
        src="https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3600679/065e3e76c0ecf0785368b49bf99bd1e5/preview.png?t=1680966687940"
        alt=""
      />
      <div className="search">
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="search-bar">Title</label>
          <input
            type="text"
            id="search-bar"
            name="search-bar"
            placeholder="Name of the dish"
            value={title}
            onChange={handleChange}
          />
          {/* <label htmlFor="recipe">Ingrediants</label>
          <textarea name="recipe" id="recipe" cols="30" rows="10"></textarea> */}
          <button
            type="submit"
            className="search-button"
            // onClick={() => navigate("/SearchResultPage")}
            onClick={handleSubmit}
          >
            Search
          </button>
          {/* <Link to="/searchResult" className="search-button">Search</Link> */}
        </form>
      </div>
    </header>
  );
}
export default SearchComp;
