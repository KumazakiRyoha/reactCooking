import React, {Component, createRef, forwardRef, PureComponent} from 'react';

class Home extends Component
{
    render()
    {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

const Profile = forwardRef(function (props, ref) {
    return <p ref={ref}>Profile</p>
})

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.homeref = createRef();
    }

    render() {
        return (
            <div>
                <h2 ref={this.titleRef} />
                <Home ref={this.homeref}/>
                <Profile ref={this.homeref}/>
                <button onClick={() => this.printRef()}>打印ref</button>
            </div>
        );
    }

    printRef() {
        console.log("aaa")
        console.log(this.titleRef.current);
        console.log(this.homeref.current);
    }
}

export default App;