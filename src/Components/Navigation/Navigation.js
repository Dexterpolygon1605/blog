import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="pa3 pa4-ns">
                <a className="navb link dim white b f4 f1-ns f4-m dib mr3 fl" href="0#" title="Home">NLProjects</a>
                <a className="navb shadow-5 link dim white f6 f5-ns dib mr3 fr ml4 br-pill ba pv2 ph3 grow" href="0#" title="About">Git Hub</a>
                <a className="navb shadow-5 link dim white f6 f5-ns dib fr br-pill ba pv2 ph3 grow" href="0#" title="Contact">LinkedIn</a>
            </nav>
        </div>
    )
}

export default Navigation;