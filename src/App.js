import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import Contact from "./Container/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path={'/'}  element={<Home />} />
                <Route path={'/contact'}  element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
