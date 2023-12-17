import React, {Component} from 'react';

import store from '../store'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <h1>当前计数: {0}</h1>
                <button>-1</button>
                <button>+1</button>
            </div>
        );
    }
}

export default About;