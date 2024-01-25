import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        <Button variant="contained">Hello world</Button>
        <p className="text-red-100">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//TODO:
// Firebase Integration
// Routing
// Login Page
// Connect to API / Set up ENV variables
// Create a Calendar component or utilize someone else's
