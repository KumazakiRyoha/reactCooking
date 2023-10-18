import React, {Component} from 'react';

function Message(props) {
    return <h1>{props.counter}</h1>
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render()
    {
        return (
            <div>
                <h2>当前技术：{this.state.counter}</h2>
                <button onClick={e => {this.increment()}}>+1</button>
                <Message counter={this.state.counter}/>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log(this.state.counter)
    }

    increment() {
        setTimeout(() => {
            this.setState({
                counter: this.state.counter + 1
            })
            console.log(this.state.counter)
        },0)
    }
}

export default App;