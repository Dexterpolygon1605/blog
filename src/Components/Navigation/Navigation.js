import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <nav className="fixed mt2 mt0-ns ml2 ml0-ns pa3 pa4-ns">
                    <p onClick={() => onRouteChange('homepage')} className="navb link dim white b f3 f1-ns f3-m dib mr3 fl mt1 mt0-ns" title="Home">NLProjects</p>
                    <a className="navb shadow-5 link dim white f6 f5-ns dib mr1 mr3-ns fr ml2 ml4-ns br-pill ba pv2 ph2 ph3-ns grow" href="https://github.com/Dexterpolygon1605" title="About" target="_blank" rel="noreferrer">Git Hub</a>
                    <a className="navb shadow-5 link dim white f6 f5-ns dib fr br-pill ba pv2 ph2 ph3-ns grow" href="https://www.linkedin.com/in/nelson-lopes-1605/" title="Contact" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </div>
        )
    }
}

export default Navigation;