//filter 
let arr    = [1, 2, 3, 4],  
    newArr = [];

for(let i = 0; i < arr.length; i++) {  
    if(arr[i] > 2) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);


let arr = [1, 2, 3, 4];

let newArr = arr.filter(function(val){  
    return val > 2;
})

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


let arr = [1, 2, 3, 4];

let newArr = arr.find(function(val){  
    return val === 2;
})

console.log(newArr);


//MAP
let arr    = [1, 2, 3],  
    newArr = [];

for(let i = 0; i < arr.length; i++) {  
    newArr[i] = arr[i] + 2;
}

console.log(newArr);


var arr = [1, 2, 3];

arr.map(function(val) {  
    return val * 2;
})

console.log(arr);


//reduce
let arr      = [1, 2, 3],  
    totalNum = 0;

for(let i = 0; i < arr.length; i++) {  
    totalNum += arr[i];
}

console.log(totalNum);


let arr = [1, 2, 3];

let totalNum = arr.reduce(function(total, val) {  
    return total + val;
});

console.log(totalNum);