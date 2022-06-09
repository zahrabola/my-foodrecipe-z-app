import { useState, useEffect } from "react";
import './App.css';
import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";
const Apiurl= "https://www.themealdb.com/api/json/v1/1/search.php?s=";
//https://www.themealdb.com/api.php -- link 
//https://www.themealdb.com/api/json/v1/1/search.php?f=a
 function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const[category, setCategory] = useState()

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = Apiurl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setItems(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zahra Recipe App</h1>
      </header>
      <div className="row">
        <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="container">
        <RecipeGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
}

export default App;
