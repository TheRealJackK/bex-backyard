import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/bex-backyard">
          <Home />
        </Route>
        <Route exact path="/bex-backyard/Shop">
          <Shop />
        </Route>
        <Route exact path="/bex-backyard/About">
          <About />
        </Route>
        <Route exact path="/bex-backyard/Contact">
          <Contact />
        </Route>
        <Route exact path="/bex-backyard/Thankyou">
          <Thankyou />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  )
}