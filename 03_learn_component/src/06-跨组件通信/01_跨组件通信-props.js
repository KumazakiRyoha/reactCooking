import React, {Component} from 'react';


function ProfileHeader(props) {
    return (
        <div>
            <h2>用户昵称：{props.nickname}</h2>
            <h2>用户等级：{props.level}</h2>
        </div>
    )
}
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
            nickname: "kobe",
            level: "99"
        }

    }

    render() {
        const {nickname,level} = this.state;
        return (
            <div>
                <Profile nickname={nickname}  level={level}/>
            </div>
        );
    }
}

export default App;