import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="w-100 z-2 fixed mt0 mt0-ns ml2 ml0-ns pa3 pa4-ns">
                    <p href="https://portfoliocpnl.netlify.app/" className="pointer navb link dim white b f4 f1-ns f3-m dib mr3 fl mt1 mt0-ns" title="Home">NLPortfolio</p>
                    <a className="btnav shadow-5 link white f6 f3-ns dib fr ba pv1 ph1 ph3-ns grow" href="https://github.com/Dexterpolygon1605" title="Git Hub" target="_blank" rel="noreferrer"><span>Git Hub</span></a>
                    <a className="btnav shadow-5 link white f6 f3-ns dib fr mr2 ba pv1 ph1 ph3-ns grow" href="https://www.linkedin.com/in/nelson-lopes-1605/" title="Contact" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
                </nav>
            </div>
        )
    }
}

export default Navigation;