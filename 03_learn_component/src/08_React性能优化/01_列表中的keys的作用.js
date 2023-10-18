import React, {Component} from 'react';

class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            movies: ["雨宫雅玲","古贺春华","橘英雄","国见比吕"]
        }
    }
    render()
    {
        return (
            <div>
                <h2>电影列表</h2>
                <ul>
                    {
                        this.state.movies.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={e => this.insertMovie()}>添加电影</button>
            </div>
        );
    }

    insertMovie() {
        this.setState({
            movies: [...this.state.movies,"大话西游"]
        })
    }
}

export default App;