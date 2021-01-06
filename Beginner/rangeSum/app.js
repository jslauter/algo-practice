function rangeSum(arr) {
  let arrList = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    arrList.push(i);
  }
  return arrList.reduce((acc, num) => acc + num, 0);
}
