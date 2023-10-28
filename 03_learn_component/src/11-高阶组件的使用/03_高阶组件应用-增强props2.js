import React, {Component, createContext, PureComponent} from 'react';

const UserContext = createContext({
    name: "雨宫雅玲",
    age: 16,
    region: "Japan"
});


function enhanceUserProps(WrappedComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrappedComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}


class Home extends PureComponent {

    render() {
        const { name, age, region } = this.props;
        return (
            <div><h2>Home: {`昵称: ${name} 年纪：${age} 区域：${region}`}</h2></div>
        )
    }
}

class About extends PureComponent {
    render() {
        const { name, age, region } = this.props;
        return (
            <div><h2>About: {`昵称: ${name} 年纪：${age} 区域：${region}`}</h2></div>
        )
    }
}

const Enhancehome = enhanceUserProps(Home)
const EnhanceAbout = enhanceUserProps(About)

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <UserContext.Provider value={{name: '古贺春华',age: 16,region: 'Japan'}}>
                    <Enhancehome/>
                    <EnhanceAbout/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App