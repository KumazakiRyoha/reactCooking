import React, {Component, PureComponent} from 'react';
import {EventEmitter} from "events";

const eventBus = new EventEmitter();

class Home extends Component {

    componentDidMount() {
        eventBus.addListener("sayHello",this.handleSayHelloList)
    }

    componentWillUnmount() {
        eventBus.removeAllListeners("sayHello",this.handleSayHelloList)
    }

    handleSayHelloList (args1,args2) {
        console.log(args1,args2)
    }

    render()
    {
        return (
            <div>
                Home
            </div>
        );
    }
}

class Profile extends Component {
    render()
    {
        return (
            <div>
                Profile
                <button onClick={e => this.emmitEvent()}>点击</button>
            </div>
        );
    }

    emmitEvent() {
        eventBus.emit("sayHello","hello home",123)
    }
}

class App extends Component
{
    render()
    {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        );
    }
}

export default App;