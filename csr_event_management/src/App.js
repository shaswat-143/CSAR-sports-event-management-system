import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Event from "./Pages/Event/Event";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Login/Register";
import Footer from "./components/Footer/Footer";
import ParEvent from "./Pages/ParEvent/ParEvent";
import AdHome from "./Admin/AdHome";
import AdminLogin from "./Admin/Pages/AdminLogin";
import UserDashBoard from "./components/UserDashBoard";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Admin/AdminDashboard";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partEvent" element={<ParEvent />} />
        <Route path="/admin/home" element={<AdHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
