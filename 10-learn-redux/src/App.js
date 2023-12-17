import React, {Component} from 'react';
import About from "./pages/about";
import Home from "./pages/home";

class Spp extends Component {
  render() {
    return (
        <div>
          <About/>
          <Home/>
        </div>
    );
  }
}

export default Spp;