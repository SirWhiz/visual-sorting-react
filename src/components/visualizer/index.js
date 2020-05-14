import React from 'react';

import BubbleSort from '../bubble-sort';

import './Visualizer.css';

class Visualizer extends React.Component {

    BUBBLE_SORT = 1;

    constructor() {
        super();
        this.state = {
            selected: 0
        }
    }

    change = (e) => {
        const selectedAlgo = parseInt(e.target.value);
        this.setState({ selected: selectedAlgo });
    }

    render() {

        let algorithm = "";
        if(this.state.selected === this.BUBBLE_SORT) {
            algorithm = <BubbleSort/>
        }

        return(
            <div>
                <div className="main-title">Please choose a sorting algorithm to see how it works</div>
                <div className="buttons-container">
                    <div>
                        <select className="dropdow-select" value={this.state.selected} onChange={this.change}>
                            <option value="0">Select an Algorithm</option>
                            <option value="1">Bubble Sort</option>
                            <option value="2">Another cool Algorithm</option>
                        </select>
                        <button className="start-button">Start Sorting</button>
                    </div>
                </div>
                {algorithm}
            </div>
        )
    }

}

export default Visualizer;