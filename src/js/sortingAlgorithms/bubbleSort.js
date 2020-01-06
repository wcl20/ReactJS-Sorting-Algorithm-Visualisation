import * as Animation from "../animation";

export default function bubbleSort(array) {
  const animations = new Animation.Animations();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        animations.add(new Animation.Swap(j, j + 1));
      }
    }
  }
  return animations;
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}