import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Instructors from "./Pages/Instructors";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
	return (
		<div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/instructors' exact element={<Instructors/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </Router>
		</div>
	);
}

export default App
