// import SearchComp from "./components/searchComp";
// import Footer from "./components/footer";
// import CardComp from "./components/cardComp";
// // import CardsPage from "./components/CardsPage.JS";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SearchResultPage from "./components/searchResultPage.js";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <div>
//             <Route path="/" exact element={<SearchComp />} />
//             <Route path="/searchResult" element={<SearchResultPage />} />
//             <CardComp />
//             <Footer />
//           </div>
//         </Routes>
//       </Router>
//       {/* <SearchComp/>
//       <CardComp/>
//       <Footer/> */}
//     </div>
//   );
// }

// export default App;
import SearchComp from "./components/searchComp";
import Footer from "./components/footer";
import CardComp from "./components/cardComp";
// import { Route, Routes } from "react-router-dom";
import SearchResultPage from "./components/searchResultPage.js";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Routes>
        <Route path="/" element={<SearchComp />} />
        <Route path="/searchResultPage" element={<SearchResultPage />} />
      </Routes> */}
      <SearchComp/>
      <CardComp />
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
