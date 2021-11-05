import React from "react";
import './Banner.css';
import Profile from './perfil.png';

const Banner = () => {
    return (
        <div className="banner fixed w-50 h-auto br4 mt4-m">
            <article class="mw7 center ph3 ph3-ns tc br2 pv5 white mt2">
                <img className="w-30 w-50-m" src={Profile} alt="Profile" />
                <h1 class="fw6 f3 f2-ns f4-m lh-title mt3 mb3">
                    Hi! Im Nelson Lopes,
                </h1>
                <h2 class="fw2 f4 f5-m lh-copy mt0 mb3">
                    Here is where I showcase my projects
                </h2>
                <p class="fw1 f5 f6-m mt0 mb3">
                    Check my Projects if you're interested!
                </p>
                <div>
                    <a class="f6 br-pill bg-white no-underline black ba b--white grow pv2 ph5 dib ml3 mr3 grow"
                        href="0#">
                        Projects
                    </a>
                </div>
            </article>
        </div>
    )
}

export default Banner;