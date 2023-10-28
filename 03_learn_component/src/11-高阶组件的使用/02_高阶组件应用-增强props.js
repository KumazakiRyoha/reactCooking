import React, {Component, PureComponent} from 'react';


function enhanceRegionProps(WrappedComponent) {
    return props => {
        return <WrappedComponent {...props}/>
    }
}



class Home extends PureComponent {
    render() {
        return (
            <div><h2>Home: {`昵称: ${this.props.name} 年纪：${this.props.age} 区域：${this.props.region}`}</h2></div>
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <div><h2>About: {`昵称: ${this.props.name} 年纪：${this.props.age} 区域：${this.props.region}`}</h2></div>
        )
    }
}

const Enhancehome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <Enhancehome name={"测试1"} age={12} region={"日本"}/>
                <EnhanceAbout name={"测试2"} age={18} region={"日本"}/>
            </div>
        );
    }
}

export default App