// App.jsx
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import MentionsLegales from "../Components/Footer/MentionsLegales/MentionsLegales";
import Footer from "../Components/Footer/Footer";
import data from "../Components/data";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ajoutez des routes dynamiques pour chaque catégorie */}
            {Object.keys(data).map((category) => (
              <Route
                key={category}
                path={`/${category.toLowerCase()}`}
                element={<Home />}
              />
            ))}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
