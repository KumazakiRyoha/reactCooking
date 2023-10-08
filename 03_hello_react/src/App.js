import React,{Component} from "react";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello World"
        }
        this.btnClick = this.btnClick.bind(this);
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.btnClick}>改变文本</button>
            </div>
        )
    }
    btnClick(){
        this.setState({
            message: "Hello React"
        })
    }
}