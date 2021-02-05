import React, { useState, useEffect } from "react";
import "./App.css";
import CardListComponent from "./components/cardlist/card-list.component";
import SearchBox from "./components/search-box/SearchBox";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((resp) =>
      resp.json().then((users) => setMonsters(users))
    );
  }, [monsters]);

  const fileteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  const handleSearchMonsters = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        onSearch={handleSearchMonsters}
        placeholder="Search Monsters"
      />
      <CardListComponent monsters={fileteredMonsters} />
    </div>
  );
}

export default App;
