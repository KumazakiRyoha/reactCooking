import React, {PureComponent} from 'react';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {name: "lili1",age: 20},
                {name: "lili2",age: 25},
                {name: "lili3",age: 31},
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        this.state.friends.map((item,index) => {
                            return <li key={item.name}>{item.name}</li>
                        })
                    }
                </ul>
                <button onClick={e => this.insertData()}>添加数据</button>
            </div>
        );
    }
    insertData() {
        // 1. 不推荐做法
        // const newData = {name: "tome",age: 30}
        // this.state.friends.push(newData)
        // this.setState({
        //     friends: this.state.friends
        // })
        // 2. 推荐做法
        const newFriends = [...this.state.friends];
        newFriends.push({name: "tom",age: 30})
        this.setState({
            friends: newFriends
        })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextState.friends !== this.state.friends) {
    //         return true;
    //     }
    //     return false;
    // }
}

export default App;