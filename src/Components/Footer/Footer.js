import React from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import '../Navigation/Navigation.css'
init("user_f8Jrkm8mUDLAxC51oMJJw");

const Footer = () => {
    
    function showModal() {
        document.getElementById('modal').style.display = 'block';
    }

    function messageSent() {
        showModal()
        document.getElementById('email-address').value = '';
        document.getElementById('message').value = '';
    }

    window.onload = function () {
        document.getElementById('template_6xccg1p').addEventListener('submit', function (event) {
            event.preventDefault();
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('service_2kdxwgk', 'template_6xccg1p', this)
                .then(function () {
                    messageSent();
                }, function (error) {
                });
        });
    }



    return (
        <footer class="num z-2 white-80 pv0 pv0-l ph4 w-100 mt6 reveal">
            <main class="pa4 black-80">
                <form id="template_6xccg1p" class="measure center">
                    <input type="hidden" name="contact_number" />
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0 white">Send me your feedback!</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6 white tl tracked" htmlfor="email-address" required>Email: </label>
                            <input class="pa2 input-reset white b--white grow br3 bg-transparent pa2 w-100" type="email" name="user_email" id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6 white tl tracked" for="message" required>Message: </label>
                            <textarea id="message" name="message" rows="6" class="white b--white grow br3 bg-transparent pa2 db border-box w-100 measure ba b--white pa2 br2 mb2" aria-describedby="message-desc"></textarea>
                        </div>
                    </fieldset>
                    <div>
                        <button class="btnav b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib white tracked" type="submit" value="Submit" ><span>Submit</span></button>
                    </div>
                </form>
            </main>
        </footer>
    )
}

export default Footer;