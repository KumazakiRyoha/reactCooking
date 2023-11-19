import React, {Component, PureComponent} from 'react';


function withRenderTime(WrappedComponent) {
    return class extends PureComponent {
        componentWillMount() {
            this.beginTime = Date.now();
        }
        componentDidMount() {
            this.endTime = Date.now();
            const duration = this.endTime - this.beginTime;
            console.log(`${WrappedComponent.name}渲染时间: ${duration}`)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}


class Home extends PureComponent {
    render() {
        return (
            <div><h2>Home</h2></div>
        )
    }

}

class About extends PureComponent {
    render() {
        return (
            <div><h2>About</h2></div>
        )
    }
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

class App extends Component {
    render() {
        return (
            <div>
                <TimeHome/>
                <TimeAbout/>
            </div>
        );
    }
}

export default App;