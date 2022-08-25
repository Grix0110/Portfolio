import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Introduction() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_fegazal",
                "template_3jnd2uf",
                form.current,
                "A0NKga9ii7YHiuM6b"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact" className="container-four">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
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