import React, {Component, Fragment} from 'react';

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            firends: [
                {name: "黎明1",age: 16},
                {name: "黎明2",age: 16},
            ]
        }
    }
    render()
    {
        return (
            <>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <div>
                    {
                        this.state.firends.map((item,index) =>  {
                            return (
                                <Fragment key={item.name}>
                                    <div>{item.name}</div>
                                    <p>{item.age}</p>
                                    <hr/>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default App;