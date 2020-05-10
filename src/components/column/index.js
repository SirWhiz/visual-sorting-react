import React from 'react';

import './Column.css'

class Column extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            color: props.color
        }
    }

    myStyle = {
        backgroundColor: this.props.color,
        height: this.props.value * 3
    }

    render() {
        return(
            <div className="column">
                {/* {this.state.value} */}
                <div className="col-itself" style={this.myStyle}></div>
            </div>
        );
    }

}

export default Column;