import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Pagenotfound from "./component/Pagenotfound";
import Textform from "./component/Textform";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar titel="TextUtils" />
    <Routes>
      <Route exact path="/about" element={<About/>}/>
    
      <Route exact path="/" element={<div className="container my-4">
      <Textform heading="Enter the text to analyze" />
    </div>}/>
      <Route   path="*" element={<Pagenotfound/>}/>
 
    </Routes>
    </Router>
     
    </>
  );
}

export default App;
