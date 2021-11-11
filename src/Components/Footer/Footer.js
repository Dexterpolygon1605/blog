import React from "react";

const Footer = () => {
    return (
        <footer class="num z-2 white-80 pv0 pv0-l ph4 w-100 mt6">
            <main class="pa4 black-80">
                <form class="measure center" method="POST" data-netlify="true">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0 white">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6 white tl" for="email-address">Email:</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black white hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6 white tl" for="message">Message:</label>
                            <textarea id="message" name="message" rows="6" class="bg-transparent white db border-box hover-white w-100 measure ba b--white-20 pa2 br2 mb2" aria-describedby="message-desc"></textarea>
                        </div>
                    </fieldset>
                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Submit" />
                    </div>
                </form>
            </main>
        </footer>
    )
}

export default Footer;