import React, { useState, useEffect } from "react";
import SearchComp from "./components/searchComp";
import Footer from "./components/footer";
import CardComp from "./components/cardComp";
import ViewMoreData from "./components/viewMoreData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResultPage from "./components/searchResultPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState(null);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      // Fetch data from the API using the provided search query
      fetchRecipes(searchQuery);
    }
  }, [searchQuery]);

  const fetchRecipes = (query) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=a98d8cde9d6e41ff91d3715cde7148f4`
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchComp onSubmit={handleSearchSubmit} />
                <CardComp />
                <Footer />
              </div>
            }
          />
          {apiData && apiData.results && apiData.results.length > 0 && (
            <Route
              path="/searchResultPage"
              element={<SearchResultPage apiData={apiData} />}
            />
          )}
          <Route path="/viewMoreData" element={<ViewMoreData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
