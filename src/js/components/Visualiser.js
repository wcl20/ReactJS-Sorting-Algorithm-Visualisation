import React, { Component } from "react";

import * as Algorithms from "../sortingAlgorithms";

class Visualiser extends Component {

  constructor(props) {
    super(props);
    this.values = [...Array(100).keys()];

    this.shuffle = this.shuffle.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.quickSort = this.quickSort.bind(this);
    this.heapSort = this.heapSort.bind(this);
  }

  shuffle() {
    const animation = Algorithms.shuffle(this.values);
    animation.run();
  }

  bubbleSort() {
    const animation = Algorithms.bubbleSort(this.values);
    animation.run();
  }

  insertionSort() {
    const animation = Algorithms.insertionSort(this.values);
    animation.run();
  }

  mergeSort() {
    const animation = Algorithms.mergeSort(this.values)
    animation.run();
  }

  quickSort() {
    const animaiton = Algorithms.quickSort(this.values);
    animaiton.run();
  }

  heapSort() {
    const animation = Algorithms.heapSort(this.values);
    animation.run();
  }

  render() {
    return (
      <div>
        <div className="buttons">
          <button id="shuffle" onClick={this.shuffle}>Shuffle</button>
          <button onClick={this.bubbleSort}>Bubble Sort</ button>
          <button onClick={this.insertionSort}>Insertion Sort</button>
          <button onClick={this.mergeSort}>Merge Sort</button>
          <button onClick={this.quickSort}>Quick Sort</button>
          <button onClick={this.heapSort}>Heap Sort</button>
        </div>
        <div className="container">
          {
            this.values.map((value, i) => {
              return <div className="bar" key={i} style={{ height: `${6 * value + 20}px` }}></div> 
            })
          }
        </div>
      </div>
    )
  }
}

export default Visualiser