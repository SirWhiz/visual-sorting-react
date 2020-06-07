import React from 'react';

import BubbleSort from '../bubble-sort';
import SelectionSort from '../selection-sort';
import MergeSort from '../merge-sort';

import { BUBBLE_SORT, SELECTION_SORT, MERGE_SORT } from './constants';

import './Visualizer.css';

class Visualizer extends React.Component {

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

        let algorithm = getSelectedAlgorithm(this.state.selected);

        return(
            <div>
                <div className="main-title">Please choose a sorting algorithm to see how it works</div>
                <div className="buttons-container">
                    <div>
                        <select className="dropdow-select" value={this.state.selected} onChange={this.change}>
                            <option value="0">Select an Algorithm</option>
                            <option value={BUBBLE_SORT}>Bubble Sort</option>
                            <option value={SELECTION_SORT}>Selection Sort</option>
                            <option value={MERGE_SORT}>Merge Sort</option>
                        </select>
                    </div>
                </div>
                {algorithm}
            </div>
        )
    }

}

function getSelectedAlgorithm(selection) {
    var algorithm = "";
    switch(selection) {
        case 0:
            algorithm = "";
            break;
        case BUBBLE_SORT:
            algorithm = <BubbleSort/>
            break;
        case MERGE_SORT:
            algorithm = <MergeSort/>
            break;
        case SELECTION_SORT:
            algorithm = <SelectionSort/>
            break;
        default:
            algorithm = ""
    }
    return algorithm;
}

export default Visualizer;