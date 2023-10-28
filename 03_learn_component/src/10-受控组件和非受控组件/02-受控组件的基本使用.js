import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        用户: <input type="text" id="username"
                                     onChange={e => this.handleChange(e)}
                                value={this.state.username}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    handleChange(event) {
        this.setState({
            username: event.target.value
        })
    }
}

export default App;