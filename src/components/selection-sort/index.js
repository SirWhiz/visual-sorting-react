import React from 'react';

import { BLUE, RED, LIGHT_GREEN } from '../visualizer/constants';
import { clearTimeouts, fillArray } from '../visualizer/helperFunctions';

class SelectionSort extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: fillArray(),
            name: 'Selection Sort'
        }
        doSelectionSort = doSelectionSort.bind(this);
        this.doSort = this.doSort.bind(this);
    }

    componentWillUnmount() {
        clearTimeouts();
    }

    doSort() {
        clearTimeouts();
        let randomArray = fillArray();
        this.setState({
            numbers: randomArray
        }, () => {
            doSelectionSort(randomArray);
        });
    }

    render() {
        return(
            <div className="visualizer-container">
                <div className="button-container">
                    <button className="start-button" onClick={this.doSort}>Start Sorting</button>
                </div>
                <div className="visualizer">
                    <div className="col-container">
                        {this.state.numbers.map((item, idx) => (
                            <div key={idx} className="column">
                                <div className="col-itself" style={{backgroundColor: item.color, height: item.value * 3}}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

}

function doSelectionSort(randomArray) {
    const animationsArray = document.getElementsByClassName('col-itself');
    let timeout = 150;
    let len = randomArray.length;

    for (let i = 0; i < len; i++) {

        let min = i;

        setTimeout(() => {
            if(i > 0) {
                animationsArray[i-1].style.backgroundColor = BLUE;
            }
            animationsArray[i].style.backgroundColor = LIGHT_GREEN;
        }, timeout);

        for (let j = i + 1; j < len; j++) {

            setTimeout(() => {
                animationsArray[j].style.backgroundColor = RED;
            }, timeout);
            setTimeout(() => {
                animationsArray[j].style.backgroundColor = BLUE;
            }, timeout + 50);

            if (randomArray[min].value > randomArray[j].value) {
                min = j;
            }

            timeout += 50;    
        }
        if (min !== i) {
            let tmp = randomArray[i].value;
            randomArray[i].value = randomArray[min].value;
            randomArray[min].value = tmp;

            setTimeout(() => {
                animationsArray[i].style.height = randomArray[i].value * 3 + 'px';
                animationsArray[min].style.height = randomArray[min].value * 3 + 'px';
            }, timeout);
        }
        timeout += 50;
    }
    return randomArray;
}

export default SelectionSort;