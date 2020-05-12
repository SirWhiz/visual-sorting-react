import React from 'react';

import './Visualizer.css';

class Visualizer extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: fillArray(),
            name: 'Bubble Sort'
        }
        doBubbleSort = doBubbleSort.bind(this);
    }

    componentDidMount() {
        doBubbleSort();
    }

    render() {
        return(
            <div className="visualizer">
                <div className="col-container">
                    {this.state.numbers.map((item, idx) => (
                        <div key={idx} className="column">
                            <div className="col-itself" style={{backgroundColor: item.color, height: item.value * 3}}></div>
                        </div>
                    ))}
                </div>
            </div>
        )
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

function doBubbleSort() {
    let animationsArray = document.getElementsByClassName('col-itself');
    let arr = this.state.numbers;
    console.log(arr);
    var len = arr.length;

    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
            if (arr[j].value > arr[j + 1].value) {
                var temp = arr[j].value;
                arr[j].value = arr[j+1].value;
                arr[j+1].value = temp;

                const barOneStyle = animationsArray[j].style;
                const barTwoStyle = animationsArray[j+1].style;
                const barOneHeight = arr[j].value * 3 + 'px';
                const barTwoHeight = arr[j+1].value * 3 + 'px';
                const color = '#FF5722';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barOneStyle.height = barOneHeight;
                    barTwoStyle.backgroundColor = color;
                    barTwoStyle.height = barTwoHeight;
                }, 1000);
            }
        }
    }
    return arr;
}

export default Visualizer;