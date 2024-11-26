import { Router } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
