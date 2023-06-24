import { createContext, useState } from "react";


export const Searched = createContext();

const SearchContext = ({children}) => {
     const [searched, setSearched] = useState({search: "", searcheType: "All"});


     return(
          <Searched.Provider value={[searched, setSearched]} >
               {children}
          </Searched.Provider>
     )
}

export default SearchContext;