import React from 'react';

import './BubbleSort.css';

import { BLUE, RED } from '../visualizer/constants';
import { clearTimeouts, fillArray } from '../visualizer/helperFunctions';

class BubbleSort extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: fillArray(),
            name: 'Bubble Sort'
        }
        doBubbleSort = doBubbleSort.bind(this);
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
            doBubbleSort(randomArray);
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

function doBubbleSort(randomArray) {
    const animationsArray = document.getElementsByClassName('col-itself');
    let arr = randomArray;
    let len = arr.length;
    let timeout = 150;

    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
            if (arr[j].value > arr[j + 1].value) {
                let temp = arr[j].value;
                arr[j].value = arr[j+1].value;
                arr[j+1].value = temp;

                const barOneStyle = animationsArray[j].style;
                const barTwoStyle = animationsArray[j+1].style;
                const barOneHeight = arr[j].value * 3 + 'px';
                const barTwoHeight = arr[j+1].value * 3 + 'px';
                const color = RED;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    barOneStyle.height = barOneHeight;
                    barTwoStyle.height = barTwoHeight;
                }, timeout);

                setTimeout(() => {
                    barOneStyle.backgroundColor = BLUE;
                    barTwoStyle.backgroundColor = BLUE;
                }, timeout + 50);

                timeout = timeout + 50;
            }
        }
    }
    return arr;
}

export default BubbleSort;