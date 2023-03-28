import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/travel_planner/' exact element={<Home/>}/>
        <Route path='/travel_planner/products' element={<Products/>}/>
        <Route path='/travel_planner/services' element={<Services/>}/>
        <Route path='/travel_planner/sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
