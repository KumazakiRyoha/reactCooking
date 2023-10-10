import React, {Component} from "react";
import PropTypes from "prop-types";


function ChildCpn(props) {
    const {name,age} = props
    const { names } = props
     return (
         <div>
            <h2>{name + age}</h2>
             <ul>
                 {
                     names.map((item,index) => {
                         return <li>{item}</li>
                     })
                 }
             </ul>
         </div>
    )
}

// 属性验证
ChildCpn.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}

// 默认属性值
ChildCpn.defaultProps = {
    name: "why",
    age: 30,
    names: ["aaaa","bbbb"]
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="雨宫雅玲" age={16} names={["name1","name2","name3"]}/>
                <ChildCpn name="古贺春华" age={16} names={["name1","name2","name3"]}/>
                <ChildCpn/>
            </div>
        );
    }
}
