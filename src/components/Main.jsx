import React, { Component } from 'react';

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>

                <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/info"><li>Info</li></a>
                    <a href="/contact"><li>Contact</li></a>
                    </ul>
                </div>
                </nav>


            </div>
        )
    }
}