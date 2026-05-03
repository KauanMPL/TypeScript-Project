import "./App.css";
import CardList from "./Components/CardList/CardList";
import Card from './Components/Card/Card';
import Search from "./Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortifolio from "./Components/Portifolio/ListPortifolio/ListPortifolio";
function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<String[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortifolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) {
      return;
    }
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
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
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <ListPortifolio portfolioValues={portfolioValues} />
      <CardList searchResults={searchResult} onPortifolioCreate={onPortifolioCreate} />
    </div>
  );
}

export default App;
