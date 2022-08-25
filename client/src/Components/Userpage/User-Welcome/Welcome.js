import "./Welcome.css";
import React from "react";
import Uploader from "../ImageUploader/Uploader";

export default function Welcome() {
    return (
        <section id="welcome" className="container-one">
            <h1>Welcome</h1>
            <Uploader />
        </section>
    );
}
