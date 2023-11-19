import React, {Component, PureComponent} from 'react';


function withAuth(WrappedComponent) {
    const NewCpn = props => {
        const {isLogin} = props;
        if (isLogin) {
            return <WrappedComponent {...props} />
        } else {
            return <LoginPage/>
        }
    }
    NewCpn.displayName = "AuthCpn"
    return NewCpn;

}

// 购物车组件
class CartPage extends PureComponent {
    render() {
        return (
            <div>
                <h2>CartPage</h2>
            </div>
        );
    }
}

class LoginPage extends PureComponent {
    render() {
        return <h2>请登录</h2>
    }
}

const EnhanceCartPage = withAuth(CartPage);

export default class App extends Component
{
    render()
    {
        return (
            <div>
                <EnhanceCartPage isLogin={false}/>
            </div>
        );
    }
}