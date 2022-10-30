const arr = [8, 20, -2, 4, -6];


const selectionSort = (arr) => {
        for (let i = 0; i < arr.length - 1; i++){
            let minIndex = i;
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Doing the same thing as the following
            // const temp = arr[i];
            // arr[i] = arr[minIndex];
            // arr[minIndex] = temp;
        }
}

selectionSort(arr);
console.log(arr);

// Big-O = O(n^2)