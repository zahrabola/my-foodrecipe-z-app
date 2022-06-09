import React from "react";
const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
 

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          className="formcontrol"
          placeholder="Search Recipe"
          name="query"
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus
        />
        <input
          disabled={isLoading || !query}
          type="submit"
          className="btn-search"
          value="Search"
        />
    
      </form>
    </section>
  );
};











export default SearchBar;