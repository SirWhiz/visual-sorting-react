import React from 'react';

import './BubbleSort.css';

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
        this.setState({ numbers: fillArray() });
        clearTimeouts();
        doBubbleSort();
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

function fillArray() {
    let numbersArray = [];
    //Populate array with numbers from 0 to 50
    for(let i = 0; i < 50; i++) {
        var column = {
            value: i + 1,
            color: '#00BCD4'
        }
        numbersArray[i] = column;
    }
    //Shuffle the array
    for(let i = 0; i < 50; i++) {
        let temp = numbersArray[i].value;
        let rand = Math.floor(Math.random() * 50);
        numbersArray[i].value = numbersArray[rand].value;
        numbersArray[rand].value = temp;
    }
    return numbersArray;
}

function clearTimeouts() {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    const animationsArray = document.getElementsByClassName('col-itself');
    for (let i = 0; i < animationsArray.length; i++) {
        animationsArray[i].style.backgroundColor = '#00BCD4';
    }
}

function doBubbleSort() {
    const animationsArray = document.getElementsByClassName('col-itself');
    let arr = this.state.numbers;
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
                const color = '#FF5722';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    barOneStyle.height = barOneHeight;
                    barTwoStyle.height = barTwoHeight;
                }, timeout);

                setTimeout(() => {
                    barOneStyle.backgroundColor = '#00BCD4';
                    barTwoStyle.backgroundColor = '#00BCD4';
                }, timeout + 100);

                timeout = timeout + 100;
            }
        }
    }
    return arr;
}

export default BubbleSort;