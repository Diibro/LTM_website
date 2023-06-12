
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageContent from './pages/PageContent';
import AdminMain from './adminPages/adminMain';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/*' element={<PageContent/>} />
        <Route path="/admin/*" element={<AdminMain/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App