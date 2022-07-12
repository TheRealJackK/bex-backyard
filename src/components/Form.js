import React from "react";

export default function Form() {
    return(
        <>
        <form action="https://formsubmit.co/jkingofficial01@gmail.com" method="POST">
        <h4>Send us an Email!</h4>
            <div>
                <input type="text" name="_honey" id="honeypot"></input>
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="myemail@domain.com" required></input>
                <label>Subject</label>
                <select name="subject" id="subject" required>
                    <option>Custom Order</option>
                    <option>General</option>
                    <option>Shipping</option>
                </select>
                <label>Body</label>
                <textarea rows="5" cols="60" name="message" id="message" placeholder="Message Here" required></textarea>
                <input type="hidden" name="_next" value="https://therealjackk.github.io/bex-backyard/Thankyou"></input>
                <input type="submit" id="submit" value="Send!"></input>
            </div>
        </form>
        </>
    )
}