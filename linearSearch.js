
let arr= [10,20,30,40,50];
let target= 60;

const linearSearch = (data, target)=> {
    for(let i=0; i<data.length; i++){
        if(arr[i] ===  target){
            return i;
        }
        }
        return -1;
};


console.log(linearSearch(arr, target));