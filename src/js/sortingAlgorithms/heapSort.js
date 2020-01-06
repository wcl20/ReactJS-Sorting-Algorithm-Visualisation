import * as Animation from "../animation";

export default function heapSort(array) {
  const animations = new Animation.Animations();
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i, animations);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    swap(array, 0, i);
    animations.add(new Animation.Swap(0, i));
    heapify(array, i, 0, animations);
  }
  return animations;
}

function heapify(array, size, i, animations) {
  let largest = i;

  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }

  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    swap(array, i, largest)
    animations.add(new Animation.Swap(i, largest));
    heapify(array, size, largest, animations);
  }
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}