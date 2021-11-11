import React, { Component } from 'react';
import homepage from './imgs/homepage.png'
import rpage from './imgs/rpage.png'
import prpage from './imgs/prpage.png'


const contentState = {
    change: 'picture',
    inImage: false
}

class Projects extends Component {
    constructor() {
        super();
        this.state = contentState
    }

    onContentChange = (change) => {
        if (change === 'picture') {
            this.setState(contentState)
        } else if (change === 'details') {
            this.setState({ inImage: true })
        }
        this.setState({ change: change });
    }

    render() {
        const { inImage, change } = this.state;
        return (
                <div inImage={inImage} className="tc">
                    <div className="f1 mb5 fw6 white"> Projects </div>
                    <article class="bg-dark-gray tc dit br3 pa0 ma2 bw2 shadow-5 mw5 mw6-ns mw5-m">
                        <div class="pv2 ph3">
                            <h1 class="f3 f2-ns f3-m tracked light-blue fw6">SmartBrain</h1>
                            {change === 'picture'
                                ?
                                <h1 onClick={() => this.onContentChange('details')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">More details...</h1>
                                :
                                <h1 onClick={() => this.onContentChange('picture')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">Open image</h1>
                            }
                        </div>

                        {change === 'picture'
                            ?
                            <a href="https://smartbrainnl.herokuapp.com/" target="blank"> <img src={homepage} class="w-100 db br3 shadow-2 grow dim mb2" alt="Smartbrain" /> </a>
                            :
                            <p className="desc tl w-70 center h5-ns ">
                                This website can detect faces in pictures with a API, it also has the sign in and register functions, which works with a secure server and database, so if you register
                                you'll be able to sign in right away. The database will store how many times you detected a face in a picture, so if you entry an image that doesn't have a face, it
                                doesn't store that try.
                                Made with: <b className="light-blue">HTML5, CSS3, JavaScript(React), Node.js, PostgresSQL, Git bash and Heroku. </b> </p>
                        }

                        <div class="pa3">
                            <a href="https://smartbrainnl.herokuapp.com/" class="btnproj pointer mr2-ns light-blue link dim lh-title br-pill ba pv2 ph2 ph3-ns dit mb0-ns mb2" target="blank">See Live - Published 2021</a>
                            <a href="https://github.com/Dexterpolygon1605/smartbrain" class="btnproj pointer light-blue link dim lh-title br-pill ba pv2 ph2 ph3-ns dit" target="blank">Source code</a>
                            <p className="white fw6"> React Project </p>
                        </div>
                    </article>
                    <article class="bg-dark-gray tc dit br3 pa0 ma2 bw2 shadow-5 mw5 mw6-ns mw5-m">
                        <div class="pv2 ph3">
                            <h1 class="f3 f2-ns f3-m tracked light-blue fw6">RobotFriends</h1>
                            {change === 'picture'
                                ?
                                <h1 onClick={() => this.onContentChange('details')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">More details...</h1>
                                :
                                <h1 onClick={() => this.onContentChange('picture')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">Open image</h1>
                            }
                        </div>

                        {change === 'picture'
                            ?
                            <a href="https://dexterpolygon1605.github.io/robotfriends/" target="blank"> <img src={rpage} class="w-100 db br3 shadow-2 grow dim mb2" alt="RobotFriends" /> </a>
                            :
                            <p className="desc tl w-70 center h5">
                                This is a simple website that has a functional search bar and a grid with JSON objects.
                                Made with: <b className="light-blue">HTML5, CSS3, JavaScript(React), Git bash and JSON</b> </p>
                        }

                        <div class="pa3">
                            <a href="https://dexterpolygon1605.github.io/robotfriends/" class="btnproj pointer mr2 light-blue link dim lh-title br-pill ba pv2 ph2 ph3-ns dit mb0-ns mb2" target="blank">See Live - Published 2021</a>
                            <a href="https://github.com/Dexterpolygon1605/robotfriends" class="btnproj pointer light-blue link dim lh-title br-pill ba pv2 ph2 ph3-ns dit" target="blank">Source code</a>
                            <p className="white fw6"> React Project </p>
                        </div>
                    </article>
                    <article class="bg-dark-gray tc dit br3 pa0 ma2 bw2 shadow-5 mw5 mw6-ns mw5-m">
                        <div class="pv2 ph3">
                            <h1 class="f3 f2-ns f3-m tracked light-blue fw6">PortoRequintado</h1>
                            {change === 'picture'
                                ?
                                <h1 onClick={() => this.onContentChange('details')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">More details...</h1>
                                :
                                <h1 onClick={() => this.onContentChange('picture')} class="tc f6 white grow pointer ba br3 shadow-5 pv1">Open image</h1>
                            }
                        </div>

                        {change === 'picture'
                            ?
                            <a href="https://portorequintado.netlify.app/" target="blank"> <img src={prpage} class="w-100 db br3 shadow-2 grow dim mb2" alt="PortoRequintado" /> </a>
                            :
                            <p className="desc tl w-70 center h5">
                                This is a website that I made in group for internship and I was the one who writed all the code. It was proposed to have a public target
                                and we choose the more exquisite people that visit Porto.
                                The project is not finished, it was our first complex project.
                                It is not full mobile responsive.
                                Made with: <b className="light-blue">HTML5, CSS3, JavaScript</b> </p>
                        }

                        <div class="pa3">
                            <a href="https://portorequintado.netlify.app/" class="btnproj pointer mr2 light-blue link dim lh-title br-pill ba pv2 ph2 ph3-ns dit" target="blank">See Live - Published 2021</a>
                            <p className="white fw6"> Website Project </p>
                        </div>
                    </article>
                </div>
        )
    }
}

export default Projects;