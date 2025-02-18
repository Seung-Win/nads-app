import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Heading from "./components/Heading"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <Router>
      <Background />
      <Heading />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<Heading />} />
        <Route path="/contact" element={<Background />} />
      </Routes> 
    </Router>
  );
}

export default App;
