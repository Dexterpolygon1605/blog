import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="wallpaper"></div>
            <nav className="pa3 pa4-ns">
                <a className="link dim light-blue b f4 f3-ns dib mr3 fl" href="0#" title="Home">NLProjects</a>
                <a className="link dim white f6 f5-ns dib mr3 fr ml4" href="0#" title="About">About</a>
                <a className="link dim white f6 f5-ns dib fr" href="0#" title="Contact">Contact</a>
            </nav>

            <article className="mw7 center ph3 ph5-ns tc br2 pv3 light-blue mb5 mt4">
                <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                    This is my Portfolio
                </h1>
                <h2 className="fw2 f4 lh-copy mt0 mb3">
                    Here I showcase my projects
                </h2>
                <p className="fw1 f5 mt0 mb3">
                    You can either check my CV or my Linkedin
                </p>
                <div>
                    <a className="f6 br-pill bg-light-blue no-underline black ba b--light-blue grow pv2 ph3 dib mr3"
                        href="0#">
                        CV
                    </a>
                    <a className="f6 br-pill light-blue no-underline ba grow pv2 ph3 dib"
                        href="0#">
                        Linkedin
                    </a>
                </div>
            </article>
        </div>
    )
}

export default Navigation;