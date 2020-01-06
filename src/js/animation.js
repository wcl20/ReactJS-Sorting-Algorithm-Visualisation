class Animation {
  run() {
    throw new Error("Calling run() from abstract class")
  }
}

export class Animations extends Animation {

  constructor() {
    super()
    this.animations = [];
  }

  add(animation) {
    this.animations.push(animation);
  }

  async run() {
    for (let i = 0; i < this.animations.length; i++) {
      let animation = this.animations[i];
      await animation.run();
    }
  }
}

export class Swap extends Animation {

  constructor(index1, index2) {
    super();
    this.index1 = index1;
    this.index2 = index2;
  }
  
  async run() {
    const bars = document.getElementsByClassName("bar");
    const bar1 = bars[this.index1].style;
    const bar2 = bars[this.index2].style;
    // Swap the heights of bar at index1 and bar at index 2
    let temp = bar1.height;
    bar1.height = bar2.height;
    bar2.height = temp;
    await sleep(10);
  }
}

export class Modify extends Animation {
  constructor(index, value) {
    super();
    this.index = index;
    this.value = value;
  }

  async run() {
    const bars = document.getElementsByClassName("bar");
    const bar = bars[this.index].style;
    // Set the height of bar at index
    bar.height = `${6 * this.value + 20}px`
    await sleep(10);
  }
}

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}