const arr = [8, 20, -2, 4, -6];

const insertionSort = () => {
    for (let i = 1; i < arr.length; i++) {   // for loop iterating the unsorted part
        let numberToInsert = arr[i];
        for (let j = i - 1; j >= 0; j--) {  // for loop iterating the sorted part and comparing with numberToInsert 
          if (arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            arr[j] = numberToInsert;
          } else {
            arr[j + 1] = numberToInsert;
            break;
          }
        }
      }
}

insertionSort(arr);
console.log(arr);

//Big-O = O(n^2)