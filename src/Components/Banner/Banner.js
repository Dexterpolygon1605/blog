import React from "react";
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills'
import Profile from './perfil.png';
import './Banner.css';


class Banner extends React.Component {
    render() {
        return (
            <div className="mt6 mt4-m mb6">
                <article class="mw7 center ph3 ph3-ns tc br2 pv5 white mt0">
                    <img className="grow w-40 glow" src={Profile} alt="Profile" />
                    <h1 class="fw6 f4 f1-ns f5-m lh-title mt3 mb3">
                        Hi! Im Nelson Lopes,
                    </h1>
                    <h2 class="fw2 f4 f6-m lh-copy mt0 mb3">
                        Here's where I showcase my projects
                    </h2>
                    <div>
                        <a href="https://drive.google.com/file/d/1xVQ8eRQK5Zc4_FqXTxW2PfzSWKUum1p9/view?usp=sharing" class="btnbanner pointer shadow-5 f5 f4-ns f5-m br-pill no-underline white ba b--white grow pv2 ph4 dib ml3 ml3-ns mr2 mr3-l ml0-m grow mb6" target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </div>
                </article>
                <Skills />
                <Projects />
            </div>
        )
    }
}

export default Banner;