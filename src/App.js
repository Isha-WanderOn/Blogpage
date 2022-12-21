import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./Components/FrontPage/FrontPage";
import SeeMorePage from "./Components/SeeMorePage/SeeMorePage";


const App = () => {
  return (
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/seemore' element={<SeeMorePage />} />
          <Route path='/' element={<FrontPage />} />
        </Routes>
        
      </Router>
  );
}

export default App;
