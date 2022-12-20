import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import FrontPage from "./Components/FrontPage/FrontPage";


function App() {
  return (
      <Router>
        <Navbar />
        <FrontPage />
      </Router>
  );
}

export default App;
