import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './components/Home'
import About from './components/About'
import Prof from './components/Prof'
import Hobbies from './components/Hobbies'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import Club from './components/clubs'

function App() {
  return (
    
    <div className="App">
      <Navbar />
    <Router>
        <Routes>
          <Route path="/" exact element = {
            <>
            <Cover />
            </>
          }></Route>
          <Route path="/Home" element={
            <>
            <Home />
            </>
          }></Route>
          <Route path="/About" element={
            <>
            <About />
            </>
          }></Route>
          <Route path="/Profession" element={
            <>
            <Prof />
            </>
          }></Route>
          <Route path="/clubs" element={
            <>
            <Club />
            </>
          }></Route>
          <Route path="/Hobbies" element={
            <>
            <Hobbies />
            </>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
