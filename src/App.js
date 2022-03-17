import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
    <Router>
      <Routes> 
        <Route path="/" element={< LandingPage />}/>
        <Route path="/signup" element={< SignUp />}/>
        <Route path="/login" element={< LogIn />}/>
      </Routes>
    </Router>
    </div>
  );

}

export default App;
