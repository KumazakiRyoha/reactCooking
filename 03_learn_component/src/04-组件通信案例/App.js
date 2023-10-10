import React, {Component} from 'react';
import TabControl from "./TabControl";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTitle: "新款"
        }
        this.itemCLick = this.itemCLick.bind(this)
    }

    render() {
        const {currentTitle} = this.state

        return (
            <div>
                <TabControl itemClick={index => this.itemCLick(index)} titles={["关注","推荐","账号"]}/>
                <h2>{currentTitle}</h2>
            </div>
        );
    }

    itemCLick(index) {
        const titles = ["关注","推荐","账号"];
        this.setState({
            currentTitle: titles[index]
        })
    }

}

export default App;