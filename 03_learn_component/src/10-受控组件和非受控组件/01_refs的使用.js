import React, {PureComponent,createRef} from 'react';
class App extends PureComponent {

    constructor(props) {
        super(props);
        this.titleRef2 = createRef();
        this.titleEL = null;
    }
    render() {
        return (
            <div>
                {/*ref=字符串*/}
                <h2 ref="titleRef">hello react1</h2>
                {/*react推荐的方式*/}
                <h2 ref={this.titleRef2}>hello react2</h2>
                <h2 ref={args => this.titleEL = args}>hello react3</h2>
                <button onClick={e => this.changeText()}>改变文本</button>

            </div>
        );
    }
    changeText () {
        this.refs.titleRef.innerHTML = "Hello refs1";
        this.titleRef2.current.innerHTML = "Hello refs2"
        this.titleEL.innerHTML = "Hello refs3"
    }
}

export default App;