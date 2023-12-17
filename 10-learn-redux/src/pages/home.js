import React, {Component} from 'react';

import store from '../store'
import {addAction, subAction} from "../store/actionCreators";
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState.counter
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>当前计数: {this.state.counter}</h1>
                <button onClick={e => this.increment()}>-1</button>
                <button onClick={e => this.decrement()}>+1</button>
            </div>
        );
    }

    increment() {
        store.dispatch(addAction(1));
    }
    decrement() {
        store.dispatch(subAction(1));
    }
}

export default Home;