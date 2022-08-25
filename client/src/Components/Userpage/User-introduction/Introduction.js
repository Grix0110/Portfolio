import "./Introduction.css";
import React from "react";
import { Link } from "react-router-dom";
import DragParagraph from "../DragAndDropParagraph/DnDparagraph";

export default function UserIntroduction() {
    return (
        <section id="introduction" className="container-two">
            <h1>Introduction</h1>
            <DragParagraph />
            <Link className="userlink" to="/">
                <button>Go back to Landingpage</button>
            </Link>
        </section>
    );
}
