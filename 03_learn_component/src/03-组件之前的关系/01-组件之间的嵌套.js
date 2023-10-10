import React, {Component} from 'react';

// Header
function Header() {
    return <h2>我是Footer组件</h2>
}

function Banner() {
    return <h3>我是Banner组件</h3>
}

function ProductList() {
    return (
        <ul>
            <li>雨宫雅玲</li>
            <li>古贺春华</li>
            <li>国见比吕</li>
            <li>橘英雄</li>
        </ul>
    )
}

// Main
function Main() {
    return [
        <Banner/>,
        <ProductList/>
    ]
}

//Footer
function Footer() {
    return <h2>我是Footer组件</h2>
}

class App extends Component {
    render()
    {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;