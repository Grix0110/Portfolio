import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage/Landingpage";
import Userpage from "./Components/Userpage/Userpage"


export default function App() {

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Landingpage />} />
                <Route exact path="/user" element={<Userpage />} />
            </Routes>
        </div>
    );
}