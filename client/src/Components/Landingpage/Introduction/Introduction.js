import "./Introduction.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
    const information = [
        {
            id: "1",
            message: "some instructions on usage",
        },
        {
            id: "2",
            message: "some information about functionality",
        },
        {
            id: "3",
            message: "some encouraging words to use this page",
        },
    ];

    return (
        <section id="introduction" className="container-two">
            <h1>Introduction</h1>
            <div className="paraCon">
                {information.map(({ id, message}) => {
                    return (
                        <div key={id} className="infoCon">
                            <p className="paragrph">{message}</p>
                        </div>
                    );
                })}
            </div>
            <Link className="userlink" to="/user">
                <button>Click</button>
            </Link>
        </section>
    );
}
