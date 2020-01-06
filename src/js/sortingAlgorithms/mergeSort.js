import * as Animation from "../animation";

export default function mergeSort(array) {
  const animations = new Animation.Animations();
  let auxillary = array.slice();
  mergeSortHelper(array, auxillary, 0, array.length - 1, animations);
  return animations;
}

function mergeSortHelper(array, auxillary, start, end, animations) {
  if (start >= end) return;
  let mid = start + Math.floor((end - start) / 2);
  mergeSortHelper(auxillary, array, start, mid, animations);
  mergeSortHelper(auxillary, array, mid + 1, end, animations);
  merge(array, auxillary, start, mid, end, animations);
}

function merge(array, auxillary, start, mid, end, animations) {
  let i = start;
  let j = mid + 1;
  for (let k = start; k <= end; k++) {
    if (i > mid) {
      animations.add(new Animation.Modify(k, auxillary[j]))
      array[k] = auxillary[j++];
    } else if (j > end) {
      animations.add(new Animation.Modify(k, auxillary[i]))
      array[k] = auxillary[i++];
    } else if (auxillary[i] < auxillary[j]) {
      animations.add(new Animation.Modify(k, auxillary[i]))
      array[k] = auxillary[i++];
    } else {
      animations.add(new Animation.Modify(k, auxillary[j]))
      array[k] = auxillary[j++];
    }
  }
}