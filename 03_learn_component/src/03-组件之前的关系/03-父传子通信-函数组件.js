import React, {Component} from "react";

function ChildCpn(props) {
    const {name,age} = props
    return (
        <h2>{name + age}</h2>
    )

}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="雨宫雅玲" age="16"/>
                <ChildCpn name="古贺春华" age="16"/>
            </div>
        );
    }
}
