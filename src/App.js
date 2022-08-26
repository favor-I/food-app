import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import './assets/css/App.css'
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/cart' element={<cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
