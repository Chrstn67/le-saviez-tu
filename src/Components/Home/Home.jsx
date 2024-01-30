// Home.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";
import "./Home.scss";

const Home = () => {
  const { category: routeCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(routeCategory);
  const [selectedIdeas, setSelectedIdeas] = useState([]);

  useEffect(() => {
    loadIdeas();
  }, [selectedCategory]);

  const loadIdeas = () => {
    if (selectedCategory && data[selectedCategory]) {
      // Si une catégorie est sélectionnée et existe dans les données
      const ideasForCategory = data[selectedCategory].ideas;
      setSelectedIdeas(ideasForCategory);
    } else {
      // Sinon, afficher 10 idées aléatoires au total
      const allIdeas = Object.values(data).flatMap((cat) => cat.ideas);
      const randomIndexes = [];

      while (randomIndexes.length < 10) {
        const randomIndex = Math.floor(Math.random() * allIdeas.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      const randomIdeas = randomIndexes.map((index) => allIdeas[index]);
      setSelectedIdeas(randomIdeas);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleRandomIdeas = () => {
    // Charger 10 idées aléatoires indépendamment de la catégorie
    const allIdeas = Object.values(data).flatMap((cat) => cat.ideas);
    const randomIndexes = [];

    while (randomIndexes.length < 10) {
      const randomIndex = Math.floor(Math.random() * allIdeas.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const randomIdeas = randomIndexes.map((index) => allIdeas[index]);
    setSelectedIdeas(randomIdeas);
    setSelectedCategory(null); // Réinitialiser la catégorie sélectionnée
  };

  return (
    <section className="home">
      <section className="description">
        <p>
          Idées reçues, clichés... Il est certain qu'on en connaît tous.
          Découvre la vérité sur n'importe quel sujet !
        </p>
      </section>
      <section className="category-selector">
        <h2>Choisis une catégorie :</h2>

        <ul>
          {Object.keys(data)
            .sort() // Tri alphabétique
            .map((cat, index) => (
              <li key={index}>
                <button onClick={() => handleCategoryChange(cat)}>{cat}</button>
              </li>
            ))}
          <li>
            <button onClick={handleRandomIdeas}>Idées aléatoires</button>
          </li>
        </ul>
      </section>
      <section className="random-ideas">
        <h2>
          {selectedCategory
            ? `Idées reçues pour ${selectedCategory}`
            : "Idées reçues aléatoires"}
        </h2>
        <ul>
          {selectedIdeas.map((idea, index) => (
            <li key={index}>
              <div className="card">
                <p>{idea}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Home;
