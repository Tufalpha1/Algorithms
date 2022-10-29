
const arr= [10,20,30,40,50];
let target= 20;

const linearSearch = (arr, target)=> {
    for(let i=0; i<arr.length; i++){
        if(arr[i] ===  target){
            return i;
        }
        }
        return -1;
};


console.log(linearSearch(arr, target));
// Big-O= O(n)