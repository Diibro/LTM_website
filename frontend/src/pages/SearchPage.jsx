import { useSearchParams } from "react-router-dom";
import { Searched } from "../Context/SearchContext";
import { useContext, useEffect } from "react";

const SearchPage = () => {
     const [searched, setSearched] = useContext(Searched); 
     const [searchParams, setSearchedParams] = useSearchParams(searched.search);
     
  return (
     <div className="search">
          <h5>Searching in the {searched.searchType}</h5>
          <h4>You searched for {searchParams}</h4>
     </div>
  )
}

export default SearchPage;