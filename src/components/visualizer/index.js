import React from 'react';

import Column from '../column';

import './Visualizer.css';

class Visualizer extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: fillArray(),
            name: 'Bubble Sort'
        }
    }

    render() {
        return(
            <div className="visualizer">
                <div className="col-container">
                    {this.state.numbers.map(item => (
                        <Column value={item.value} color={item.color} />
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

export default Visualizer;