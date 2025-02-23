import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import Heading from "./components/Heading";
import Home from "./pages/home/Home";
const About = React.lazy(() => import("./pages/about/About"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Partner = React.lazy(() => import("./pages/partner/Partner"));
const Events = React.lazy(() => import("./pages/events/Events"));
const Merch = React.lazy(() => import("./pages/merch/Merch"));
const Product = React.lazy(() => import("./pages/merch/Product"));
const SingleEvent = React.lazy(() => import("./pages/events/SingleEvent"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback="Loading...">
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <React.Suspense fallback="Loading...">
                <Events />
              </React.Suspense>
            }
          />
          <Route
            path="/merch"
            element={
              <React.Suspense fallback="Loading...">
                <Merch />
              </React.Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <React.Suspense fallback="Loading...">
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path="/event"
            element={
              <React.Suspense fallback="Loading...">
                <SingleEvent />
              </React.Suspense>
            }
          />
          <Route
            path="/partner"
            element={
              <React.Suspense fallback="Loading...">
                <Partner />
              </React.Suspense>
            }
          />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Router>
        <Background />
        <Heading />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
