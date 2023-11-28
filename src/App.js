import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
// import Footer from "./Components/Footer/Footer";
import Coffee from "./Components/Coffee/Coffee";
import Projects from "./Components/Pages/Projects/Projects";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Coffee />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
