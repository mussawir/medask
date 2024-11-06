// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage'; // Import HomePage
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './Pages/AboutUsPage'; // Import other pages
import PharmaciesPage from './Pages/PharmaciesPage';
import MedicalTourismPage from './Pages/MedicalTourismPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomeHeader from './components/HomeHeader'; // Special header for HomePage
import Dashboard from './bkcomponents/Dashboard';
import LoginPage from './bkcomponents/adminlogin';

// Layout component to manage header rendering
const Layout: React.FC = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/'; // Check if current path is the home page

  return (
    <div className="App">

      {/* Conditionally render the header */}
      {isHomePage ? <HomeHeader /> : <Header />}

      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page Route */}
        <Route path="/aboutus" element={<AboutUsPage />} /> {/* About Us Page Route */}
        <Route path="/pharmacies" element={<PharmaciesPage />} /> {/* Pharmacies Page Route */}
        <Route path="/medical-tourism" element={<MedicalTourismPage />} /> {/* Medical Tourism Page Route */}
        <Route path="/contact" element={<ContactUsPage />} /> {/* Contact Us Page Route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Contact Us Page Route */}
        <Route path="/login" element={<LoginPage />} /> {/* Contact Us Page Route */}
      </Routes>

      {/* Footer appears on all routes */}
      <Footer />
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
