import React from "react";
import './Banner.css';
import Profile from './perfil.png';

const Banner = () => {
    return (
        <div className="banner fixed w-50 h-auto br4 mt4-m">
            <article class="mw7 center ph3 ph3-ns tc br2 pv5 white mt0">
                <img className="grow w-60 w-90-m" src={Profile} alt="Profile" />
                <h1 class="fw6 f3 f1-ns f4-m lh-title mt3 mb3">
                    Hi! Im Nelson Lopes,
                </h1>
                <h2 class="fw2 f2 f5-m lh-copy mt0 mb3">
                    Here's where I showcase my projects
                </h2>
                <div>
                    <a class="shadow-5 f3 br-pill no-underline white ba b--white grow pv2 ph5 dib ml3 mr3 ml0-m grow"
                        href="0#">
                        View my Projects 
                    </a>
                </div>
            </article>
        </div>
    )
}

export default Banner;