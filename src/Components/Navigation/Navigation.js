import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="wallpaper"></div>
            <nav className="pa3 pa4-ns">
                <a className="link dim light-blue b f4 f3-ns dib mr3 fl" href="0#" title="Home">NLProjects</a>
                <a className="shadow-5 link dim white f6 f5-ns dib mr3 fr ml4 br-pill ba pv2 ph3 grow" href="0#" title="About">Contact</a>
                <a className="shadow-5 link dim white f6 f5-ns dib fr br-pill ba pv2 ph3 grow" href="0#" title="Contact">About</a>
            </nav>
        </div>
    )
}

export default Navigation;