import React from 'react';

import BubbleSort from '../bubble-sort';
import MergeSort from '../merge-sort';

import './Visualizer.css';

class Visualizer extends React.Component {

    BUBBLE_SORT = 1;
    MERGE_SORT = 2;

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
        }else if(this.state.selected === this.MERGE_SORT) {
            algorithm = <MergeSort/>
        }

        return(
            <div>
                <div className="main-title">Please choose a sorting algorithm to see how it works</div>
                <div className="buttons-container">
                    <div>
                        <select className="dropdow-select" value={this.state.selected} onChange={this.change}>
                            <option value="0">Select an Algorithm</option>
                            <option value={this.BUBBLE_SORT}>Bubble Sort</option>
                            <option value={this.MERGE_SORT}>Merge Sort</option>
                        </select>
                    </div>
                </div>
                {algorithm}
            </div>
        )
    }

}

export default Visualizer;