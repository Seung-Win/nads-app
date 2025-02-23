import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Heading from "./components/Heading";
import Home from "./pages/home/Home";
const About = React.lazy(() => import("./pages/about/about"));
const Contact = React.lazy(() => import("./pages/contact/contact"));
const Events = React.lazy(() => import("./pages/events/Events"));
const Merch = React.lazy(() => import("./pages/merch/Merch"));
const Product = React.lazy(() => import("./pages/merch/Product"));
const SingleEvent = React.lazy(() => import("./pages/events/SingleEvent"));

function App() {
  return (
    <>
      <Router>
        <Background />
        <Heading />
        <Routes>
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
