import React from "react";

export default function Contact() {
    return (
        <>
        <div className="page">
            <h1>Contact</h1>
            <span>
                <form action="https://formsubmit.co/jkingofficial01@gmail.com" method="POST">
                    <h2>Send us an Email!</h2>
                    <label>Email</label>
                    <input type="email" name="email" id="email" placeholder="myemail@domain.com" required></input>
                    <label>Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="My Subject" required></input>
                    <label>Body</label>
                    <textarea rows="5" cols="60" name="message" id="message" placeholder="Message Here" required></textarea>
                    <input type="hidden" name="_next" value="http://localhost:3000/Thankyou"></input>
                    <input type="submit" id="submit" value="Send!"></input>
                </form>
            </span>
            <span>
                <h2>Need to send us an Email?</h2>
                <p>Need to enquire about out of Sydney shipping costs? Want to enquire about a custom order? 
                Fret not! Just send us a quick email via this form and we will get back to you asap! Or alternative
                contact via our Ebay store or send us a direct message on our Instagram page @bexbackyard.</p>
            </span>
        </div>
        </>
    )
}