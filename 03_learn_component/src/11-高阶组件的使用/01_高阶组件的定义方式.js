import React, {PureComponent} from 'react';

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

function enhanceComponent(WrappedComponent) {
    return class NewComponent extends PureComponent {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

let enhanceComponent1 = enhanceComponent(App);

export default enhanceComponent1;