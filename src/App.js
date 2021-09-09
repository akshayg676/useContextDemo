import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Context } from "./Context";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("Hello World");
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <Context.Provider value={{ value, setValue }}>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Context.Provider>
      </div>
    </Router>
  );
}
