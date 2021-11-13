import React from "react";
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall, DiPhp, DiPostgresql, DiMysql, DiVisualstudio, DiGithubAlt } from 'react-icons/di';
import { VscTerminalBash } from 'react-icons/vsc';
import { RiTodoLine } from 'react-icons/ri';
import { SiPostman, SiXampp } from 'react-icons/si';
class Skills extends React.Component {
    render() {
        return (
            <div className="white mt6 mt4-m mb6 w-100 reveal">
                <div className="f1 mb5 fw6 mt6"> Skills </div>
                <article class="dit tc center hidden ba w-20-ns w-70 h5 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Front - End</h1>
                    <div class="pa3 bt bg-gray">
                        <ul className="list tl f6 f5-ns mv0 mr4">
                            <li><DiReact className="f1" /> <span className="absolute mt3"> React </span></li>
                            <li><DiJavascript className="f1" /><span className="absolute mt3">Javascript </span></li>
                            <li><DiCss3 className="f1" /><span className="absolute mt3"> Css </span></li>
                            <li><DiHtml5 className="f1" /><span className="absolute mt3"> Html </span></li>
                        </ul>
                    </div>
                </article>
                <article class="dit tc center hidden ba w-20-ns w-70 h5 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Back - End</h1>
                    <div class="pa3 bt bg-gray">
                        <ul className="list tl f6 f5-ns lh-copy measure mv0 mr4">
                            <li><DiNodejsSmall className="f1" /> <span className="absolute mt3"> Node </span></li>
                            <li><DiNodejsSmall className="f1" /><span className="absolute mt3">Express </span></li>
                            <li><DiPhp className="f1" /><span className="absolute mt3"> PHP </span></li>
                            <li><DiPostgresql className="f1" /><span className="absolute mt3"> PostgresSQL </span></li>
                            <li><DiMysql className="f1" /><span className="absolute mt3"> MySQL </span></li>
                        </ul>
                    </div>
                </article>
                <article class="dit tc center hidden ba w-20-ns w-70 h5 mb6 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Tools</h1>
                    <div class="bt pv3 bg-gray">
                        <ul className="list tl f6 f5-ns lh-title measure">
                            <li><DiVisualstudio className="f1" /> <span className="absolute mt3"> VsCode </span></li>
                            <li><DiGithubAlt className="f1" /><span className="absolute mt3">Git </span></li>
                            <li><VscTerminalBash className="f2 ml2" /><span className="absolute mt2 ml1"> Bash </span></li>
                            <li><RiTodoLine className="f2 ml2 mt1" /><span className="absolute mt3 ml1"> Nortion </span></li>
                            <li><SiPostman className="f2 ml2 mt1" /><span className="absolute mt3 ml1"> Postman </span></li>
                            <li><DiPostgresql className="f1"/><span className="absolute mt3"> PgAdmin </span></li>
                            <li><SiXampp className="f2 ml2 mt1" /><span className="absolute mt3 ml2"> XAMPP </span></li>
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
}

export default Skills;