import * as Animation from "../animation";

export default function insertionSort(array) {
  const animations = new Animation.Animations();
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && current < array[j]) {
      swap(array, j, j + 1);
      animations.add(new Animation.Swap(j, j + 1));
      j--;
    }
    array[j + 1] = current;
  }
  return animations;
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}