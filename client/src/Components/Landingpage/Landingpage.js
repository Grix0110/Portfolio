import React from "react";
import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Introduction from "./Introduction/Introduction";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";

export default function Landingpage() {
    return (
        <>
            <Header />
            <Welcome />
            <Introduction />
            <Service />
            <Contact />
        </>
    );
}
