import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Heading from "./components/Heading";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Register from "./pages/registration/Registration";
import Merch from "./pages/merch/Merch";

function App() {
  return (
    <>
      <Background />
      <Heading />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
