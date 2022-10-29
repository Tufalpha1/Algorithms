let arr = [10,20,30,40,50];
let target = 40;
let leftIndex = 0;
let rightIndex = arr.length - 1;

const binarySearch = (arr, target) => {
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target <= arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
};


console.log(binarySearch(arr, target));

// Works only on sorted array
// Big-O= O(logn)