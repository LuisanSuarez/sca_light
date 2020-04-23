import React from "react";
import logo from "./logo.svg";
import "./App.css";
import commonTemplate from "./commonTemplate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/nosotros">
            <About />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// export default commonTemplate(App);
