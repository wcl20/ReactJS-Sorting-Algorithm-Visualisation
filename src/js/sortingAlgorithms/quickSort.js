import * as Animation from "../animation";

export default function quickSort(array) {
  const animations = new Animation.Animations();
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function quickSortHelper(array, start, end, animations) {
  if (start >= end) return;
  let pivot = partition(array, start, end, animations);
  quickSortHelper(array, start, pivot - 1, animations);
  quickSortHelper(array, pivot + 1, end, animations);
}

function partition(array, start, end, animations) {
  let pivot = array[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      animations.add(new Animation.Swap(i, j));
      i++;
    }
  }
  swap(array, i, end);
  animations.add(new Animation.Swap(i, end));
  return i;
}