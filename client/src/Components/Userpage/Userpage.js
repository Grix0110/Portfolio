import React from "react";
import Header from "./User-Header/Header"
import UserIntroduction from "./User-introduction/Introduction";
import Service from "./User-Service/Service";
import Welcome from "./User-Welcome/Welcome";
import Contact from "./User-Contact/Contact";

export default function Landingpage() {
    return (
        <>
            <Header />
            <Welcome />
            <UserIntroduction />
            <Service />
            <Contact />
        </>
    );
}
