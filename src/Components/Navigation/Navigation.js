import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="w-100 z-2 fixed mt0 mt0-ns ml2 ml0-ns pa3 pa4-ns">
                    <p href="https://portfoliocpnl.netlify.app/" className="pointer navb link dim white b f3 f1-ns f3-m dib mr3 fl mt1 mt0-ns" title="Home">NLProjects</p>
                    <a className="navb btnav shadow-5 link dim white f6 f5-ns dib fr br-pill ba pv2 ph2 ph3-ns grow-large" href="https://github.com/Dexterpolygon1605" title="Git Hub" target="_blank" rel="noreferrer">Git Hub</a>
                    <a className="navb btnav shadow-5 link dim white f6 f5-ns dib fr mr2 br-pill ba pv2 ph2 ph3-ns grow-large" href="https://www.linkedin.com/in/nelson-lopes-1605/" title="Contact" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </div>
        )
    }
}

export default Navigation;