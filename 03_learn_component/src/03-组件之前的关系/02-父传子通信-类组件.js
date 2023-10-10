import React, {Component} from 'react';
class ChildCpn extends Component {

    constructor(props) {
        super(props)
        this.props = props;

    }

    render() {
        const {name,age} = this.props
        return (
            <div>
                <h2>子组件展示数据 {name + " " + age}</h2>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="雨宫雅玲" age="16"/>
                <ChildCpn name="古贺春华" age="16"/>
            </div>
        );
    }
}

export default App