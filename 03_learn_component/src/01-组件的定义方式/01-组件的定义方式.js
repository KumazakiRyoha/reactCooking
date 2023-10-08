import {Component} from "react";

// export default class App extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: "你好吗？"
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>我是app组件</div>
//                 <h2>{this.state.message}</h2>
//             </div>
//         )
//     }
// }

// 函数式组件没有this对象
// 函数式组件没有内部的状态
export default function App() {
    return (
        <div>我是函数式组件</div>
    )
}