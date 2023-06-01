import { Routes,Route } from "react-router-dom"
import Home from "./Home"

const PageContent = () => {
  return (
    <Routes>
     <Route index path="/" element={<Home />}/>
    </Routes>
  )
}

export default PageContent