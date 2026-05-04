import "./App.css";
import CardList from "./Components/CardList/CardList";
import Card from './Components/Card/Card';
import Search from "./Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortifolio from "./Components/Portifolio/ListPortifolio/ListPortifolio";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValue, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortifolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValue.find((value) => value === e.target[0].value);
    if (exists) {
      return;
    }
    const updatedPortfolio = [...portfolioValue, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortifolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValue.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
    }
    console.log(result);
  };
  return (
    <div className="App">
    <NavBar />

      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <ListPortifolio
        portifolioValue={portfolioValue}
        onPortfolioDelete={onPortifolioDelete} />

      <CardList companies={searchResult} onPortifolioCreate={onPortifolioCreate} />
    </div>
  );
}

export default App;
