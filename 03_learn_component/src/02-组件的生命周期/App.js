import React, {Component} from 'react';


class Cpn extends Component {
    render() {
        return (
            <div>
                <h2>我是Cpn组件</h2>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("调用了componentWillUnmount组件")
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            counter: 1,
            showFlag: true
        }
        console.log("执行了组件的constructor")
    }
    render() {
        return (
            <div>
                我是App组件
                <button onClick={e => this.increment()}>按钮</button>
                {this.state.showFlag && <Cpn/>}
                <button onClick={e => this.disableCpn()}>不显示</button>
            </div>
        );
    }

    disableCpn() {
        this.setState({
            showFlag: !this.state.showFlag
        })
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    componentDidMount() {
        console.log("执行了组件的componentDidMount方法")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("执行了组件的componentDidUpdate方法")
    }
}

export default App;