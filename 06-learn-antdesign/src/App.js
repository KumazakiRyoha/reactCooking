import classNames from 'classnames'

// class App extends PureComponent {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             isActive: true,
//             isBar: false
//         }
//     }
//
//
//   render() {
//     const {isActive,isBar} = this.state
//     return (
//         <div>
//             {/* 原生react添加class */}
//           <h2 className={"foo bar"}>1</h2>
//           <h2 className={"title " + (isActive ? "active" : "")}>2</h2>
//           <h2 className={["title",(isActive ? "active" : "")].join(" ")}>3</h2>
//           {/*classNames库添加class*/}
//             <h2 className={classNames("active","args")}>4</h2>
//             <h2 className={classNames({"active": isActive,"bar": isBar},"titled")}>5</h2>
//         </div>
//     )
//   }
// }
//
// export default App;

import React, {PureComponent} from 'react';
import {Button} from "antd";

class App extends PureComponent {
    render() {
        return (
            <>
                <Button type="primary" block>
                    Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                    Dashed
                </Button>
                <Button disabled block>
                    disabled
                </Button>
                <Button type="text" block>
                    text
                </Button>
                <Button type="link" block>
                    Link
                </Button>
            </>
        );
    }
}

export default App;