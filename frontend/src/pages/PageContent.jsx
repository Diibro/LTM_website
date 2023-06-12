import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Header from '../components/Header';
import Footer from '../components/Footer';
import About_us from "./About_us";
import Contact_us from "./Contact_us";
import Help from "./Help";
import PrivacyPolicy from "./PrivacyPolicy";
import UsageTerms from "./UsageTerms";

const PageContent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/about_us" element={<About_us/>} />
        <Route path="/contact_us" element={<Contact_us/>} />
        <Route path="/get_help" element={<Help/>} />
        <Route path="/privacy_policy" element={<PrivacyPolicy/>}  />
        <Route path="/terms_of_use" element={<UsageTerms/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default PageContent