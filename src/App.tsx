import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Heading from "./components/Heading";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events";
import Merch from "./pages/merch/Merch";

function App() {
  return (
    <>
      <Router>
        <Background />
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
