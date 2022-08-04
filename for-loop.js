//filter 
let arr    = [1, 2, 3, 4],  
    newArr = [];

for(let i = 0; i < arr.length; i++) {  
    if(arr[i] > 2) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

//find
let arr    = [1, 2, 3, 4],  
    newArr = [];

for(let i = 0; i < arr.length; i++) {  
    if(arr[i] === 2) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);


//MAP
let arr    = [1, 2, 3],  
    newArr = [];

for(let i = 0; i < arr.length; i++) {  
    newArr[i] = arr[i] + 2;
}

console.log(newArr);

//reduce
let arr      = [1, 2, 3],  
    totalNum = 0;

for(let i = 0; i < arr.length; i++) {  
    totalNum += arr[i];
}

console.log(totalNum);