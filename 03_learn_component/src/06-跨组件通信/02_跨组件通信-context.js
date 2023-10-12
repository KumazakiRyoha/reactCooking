import React, {Component} from 'react';

// 创建Context对象
const UserContext = React.createContext({
    nickname: "雨宫雅玲",
    level: -1
})

class ProfileHeader extends Component {
    render() {
        return (
            <div>
                <h2>用户昵称：{this.context.nickname}</h2>
                <h2>用户等级：{this.context.level}</h2>
            </div>
        )
    }
}
ProfileHeader.contextType = UserContext
function Profile(props) {
    return (
        <div>
            <ProfileHeader {...props}/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: "雨宫雅玲",
            level: "99"
        }

    }

    render() {
        const {nickname,level} = this.state;
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;