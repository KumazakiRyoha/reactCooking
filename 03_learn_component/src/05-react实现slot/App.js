import React, {Component} from 'react';
import NavBar from "./NavBar";
import "./style.css"
class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <span>aaa</span>
                    <span>bbb</span>
                    <span>ccc</span>
                </NavBar>
            </div>
        );
    }
}

export default App;