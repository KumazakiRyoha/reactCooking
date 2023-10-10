import React, {Component} from 'react';

function CounterButton({ increment }) {
    return <button onClick={increment}>按钮+1</button>;
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // 绑定 this
        this.increment = this.increment.bind(this);
    }

    render()
    {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={() => this.increment()}>+1 </button>
                <CounterButton increment={this.increment}/>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default App;