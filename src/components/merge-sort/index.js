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
    const animationsArray = document.getElementsByClassName('col-itself');

    // No need to sort the array if the array only has one element or empty
    if (randomArray.length <= 1) {
        return randomArray;
    }
    
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(randomArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = randomArray.slice(0, middle);
    const right = randomArray.slice(middle);
    highlightCurrent(animationsArray, left, right);

    // Using recursion to combine the left and right
    return merge(
        doMergeSort(left), doMergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

function highlightCurrent(animationsArray, left, right) {

    let timeout = 150;

    setTimeout(() => {
        for(let i=0; i<left.length; i++) {
            var col = findByHeight(animationsArray, left[i].value);
            if(col != null) {
                console.log(col);
                col.style.backgroundColor = '#FF5722';
            }
        }
        for(let i=0; i<right.length; i++) {
            var col = findByHeight(animationsArray, right[i].value);
            if(col != null) {
                col.style.backgroundColor = '#00796B';
            }
        }
        timeout = timeout + 100;
    }, timeout);

}

function findByHeight(animationsArray, value) {
    for(let i=0; i<animationsArray.length; i++) {
        if(animationsArray[i].style.height.includes(value)) {
            return animationsArray[i];
        }
    }
}

export default MergeSort;