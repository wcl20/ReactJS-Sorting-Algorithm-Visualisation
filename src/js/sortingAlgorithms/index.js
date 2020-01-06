import * as Animation from "../animation";
import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import heapSort from "./heapSort";

export function shuffle(array) {
  const animations = new Animation.Animations();
  array.sort(() => Math.random() - 0.5);
  for (let i = 0; i < array.length; i++) {
    animations.add(new Animation.Modify(i, array[i]));
  }
  return animations;
}

export { bubbleSort, insertionSort, mergeSort, quickSort, heapSort };

