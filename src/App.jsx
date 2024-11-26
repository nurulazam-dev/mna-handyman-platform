import { Router } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
      </Router>
    </>
  );
}

export default App;
