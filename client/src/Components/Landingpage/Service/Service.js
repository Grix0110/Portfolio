import "./Service.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
    return (
        <section id="service" className="container-three">
            <h1>Service</h1>
            <Link className="userlink" to="/user">
                <button>Click</button>
            </Link>
        </section>
    );
}
