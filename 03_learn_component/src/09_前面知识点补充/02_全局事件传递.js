import React, {Component, PureComponent} from 'react';

import React, {Component} from 'react';

class Home extends Component
{
    render()
    {
        return (
            <div>
                Home
            </div>
        );
    }
}
export default Home;

import React, {Component} from 'react';

class Profile extends Component {
    render()
    {
        return (
            <div>
                Profile
            </div>
        );
    }
}

export default Profile;

class App extends Component
{
    render()
    {
        return (
            <div>
                <Home/>
                <Profile/>
            </div>
        );
    }
}

export default App;