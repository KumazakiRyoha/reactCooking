import React, {Component} from 'react';
import PropTypes from "prop-types";

class TabControl extends Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const {titles} = this.props
        const {currentIndex} = this.state
        return (
            <div className="tab-control">
                {
                    titles.map((item,index) => {
                        return <div key={index}
                                    className={"tab-item " + (index === currentIndex ? "active" : "")}
                                    onClick={e => this.itemClick(index)}>
                            <span className={index === currentIndex ? "active" : ""}>{item}</span></div>
                    })
                }
            </div>
        );
    }
    itemClick(index) {
        this.setState({
            currentIndex: index
        })
        const {itemClick} = this.props;
        itemClick(index)

    }
}

TabControl.propTypes = {
    titles: PropTypes.array.isRequired
}

export default TabControl;
