import React from 'react';

class MergeSort extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: fillArray(),
            name: 'Merge Sort'
        }
        doMergeSort = doMergeSort.bind(this);
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
            doMergeSort(randomArray);
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

function doMergeSort(randomArray) {

}

export default MergeSort;