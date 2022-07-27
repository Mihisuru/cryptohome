import React from "react";
import './App.css';
import Header from "./components/Header/header";
import HpContent from "./components/hpcontent/content";
import Footer from "./components/footer/footer";
import Test from "./components/test";
import Swapex from "./components/Swapex/App"


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
       <Route exact path="/" element={<HpContent />} />
       <Route path="/test" element={<Test />} />
       <Route path="/Swapex" element={<Swapex />} />
       
      </Routes>
      <Footer /> 
      </Router>  
  </div> 
  );
}

export default App;
