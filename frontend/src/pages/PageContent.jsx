import { useEffect } from "react";
import { Routes,Route, useLocation } from "react-router-dom"
import Home from "./Home"
import Header from '../components/Header';
import Footer from '../components/Footer';
import About_us from "./About_us";
import Contact_us from "./Contact_us";
import Help from "./Help";
import PrivacyPolicy from "./PrivacyPolicy";
import UsageTerms from "./UsageTerms";
import SearchContext from "../Context/SearchContext";
import SearchPage from "./SearchPage";
import Products from "./Products";

const PageContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <SearchContext>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/about_us" element={<About_us/>} />
        <Route path="/contact_us" element={<Contact_us/>} />
        <Route path="/get_help" element={<Help/>} />
        <Route path="/privacy_policy" element={<PrivacyPolicy/>}  />
        <Route path="/terms_of_use" element={<UsageTerms/>}/>
        <Route path="/search" element={<SearchPage />} />
        <Route exact={true} path="/all-products" element={<Products/>} />
      </Routes>
      <Footer />
    </SearchContext>
  )
}

export default PageContent;