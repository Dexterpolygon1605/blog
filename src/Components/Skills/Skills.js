import React from "react";

class Skills extends React.Component {
    render() {
        return (
            <div className="white mt6 mt4-m mb6 w-100 reveal">
                <div className="f1 mb5 fw6 mt6"> Skills </div>
                <article class="dit tc center hidden ba w-20 h5 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Front - End</h1>
                    <div class="pa3 bt">
                        <ul className="list tc f6 f5-ns lh-copy measure mv0 mr4">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </ul>
                    </div>
                </article>
                <article class="dit tc center hidden ba w-20 h5 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Back - End</h1>
                    <div class="pa3 bt">
                        <ul className="list tc f6 f5-ns lh-copy measure mv0 mr4">
                            <li>Node</li>
                            <li>Express</li>
                            <li>PHP</li>
                            <li>PostgresSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </article>
                <article class="dit tc center hidden ba w-20 h5 mb6 grow">
                    <h1 class="f4 bg-dark-gray light-blue mv0 pv2 ph3">Tools</h1>
                    <div class="pa3 bt">
                        <ul className="list tc f6 f5-ns lh-copy measure mv0 mr4">
                            <li>VsCode</li>
                            <li>Git</li>
                            <li>Bash</li>
                            <li>Nortion</li>
                            <li>Postman</li>
                            <li>PgAdmin</li>
                            <li>Xampp</li>
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
}

export default Skills;