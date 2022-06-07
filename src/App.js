import { useState, useEffect } from "react";

import './App.css';
const Apiurl= "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);




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



  return (
    <div className="App">
      <header className="App-header">
        <h1>Helllo</h1>
      </header>
   
    </div>
  );
}

export default App;
