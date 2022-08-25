import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage/Landingpage";
import Userpage from "./Components/Userpage/Userpage";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landingpage />} />
                    <Route exact path="/user" element={<Userpage />} />
                </Routes>
            </Router>
        </div>
    );
}
