import "./Contact.css";
import React from "react";

export default function Introduction() {
    return (
        <section id="contact" className="container-four">
            <form className="contactForm">
                <label>Name</label>
                <input className="input" type="text" name="user_name" />
                <label>Email</label>
                <input className="input" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="messageText" name="message" />
                <input className="submit" type="submit" value="Send" />
            </form>
        </section>
    );
}
