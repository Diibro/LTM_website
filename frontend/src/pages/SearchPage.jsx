import { useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/appcontext";
import { useContext, useEffect } from "react";

const SearchPage = () => {
     const {searched, setSearched} = useContext(AppContext); 
     const [searchParams, setSearchedParams] = useSearchParams(searched.search);
     
  return (
     <div className="search">
          <h5>Searching in the {searched.searchType}</h5>
          <h4>You searched for {searchParams}</h4>
     </div>
  )
}

export default SearchPage;