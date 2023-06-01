
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter} from "react-router-dom";
import PageContent from './pages/PageContent';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <PageContent/>
      <Footer />
    </BrowserRouter>
  )
}

export default App