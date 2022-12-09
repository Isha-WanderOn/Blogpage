import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage/FrontPage";

function App() {
  return (
      <Router>
        <Navbar />
        <FrontPage />
        <Routes>
          <Route path="/" />
          <Route path="/products" />
          <Route path="/contact" />
          <Route path="/about" />
        </Routes>
      </Router>
  );
}

export default App;
