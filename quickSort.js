const arr = [8, 20, -2, 4, -6];


const quickSort = (arr) => {
    if(arr.length < 2){              // an array with one element is considered sorted
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

// worst case - O(n^2)
// avg case - O(nlogn)