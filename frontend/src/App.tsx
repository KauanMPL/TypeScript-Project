import "./App.css";
import CardList from "./Components/CardList/CardList";
import Card from './Components/Card/Card';
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
