import "./Header.css";
import React from "react";
import { Link } from "react-scroll";

export default function Header() {
    return (
        <header className="landing-header">
            <Link to="welcome" smooth="true">
                <h1 className="landing-title">Title</h1>
            </Link>
            <ul className="header-link">
                <Link to="introduction" smooth={true}>
                    <li className="link">Introduction</li>
                </Link>
                <Link to="service" smooth={true}>
                    <li className="link">Service</li>
                </Link>
                <Link to="contact" smooth={true}>
                    <li className="link">Contact</li>
                </Link>
            </ul>
        </header>
    );
}