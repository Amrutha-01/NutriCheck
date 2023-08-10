import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchComp({ onSubmit }) {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");

  const handleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputTitle.trim() !== "") {
      onSubmit(inputTitle);
      navigate("/searchResultPage");
    }
  };

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
            value={inputTitle}
            onChange={handleChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchComp;
