import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import ServiceDetails from "./components/ServiceDetails";

import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
