import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="mt2 mt0-ns ml2 ml0-ns pa3 pa4-ns">
                <a className="navb link dim white b f3 f1-ns f4-m dib mr3 fl mt1 mt0-ns" href="0#" title="Home">NLProjects</a>
                <a className="navb shadow-5 link dim white f6 f5-ns dib mr1 mr3-ns fr ml2 ml4-ns br-pill ba pv2 ph2 ph3-ns grow" href="0#" title="About">Git Hub</a>
                <a className="navb shadow-5 link dim white f6 f5-ns dib fr br-pill ba pv2 ph2 ph3-ns grow" href="0#" title="Contact">LinkedIn</a>
            </nav>
        </div>
    )
}

export default Navigation;