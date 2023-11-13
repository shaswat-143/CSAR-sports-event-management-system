import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Event from "./Pages/Event/Event";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./components/Footer/Footer";
import ParEvent from "./Pages/ParEvent/ParEvent";
import Signin from "./Pages/Login/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signin />} />
        <Route path='/login' component={<Login />} />
        <Route path="/partEvent" component={<ParEvent />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
