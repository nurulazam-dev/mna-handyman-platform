import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

import "./App.css";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
