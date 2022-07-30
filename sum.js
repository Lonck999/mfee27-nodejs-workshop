// function sum(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//       result += i;
//     }
//     return result;
//   }


//這是新的
  function sum(n) {
    if (n === 1) {
      return 1;
    }
    return n + sum(n - 1);
  }

  
  console.log(sum(1));
  console.log(sum(3));
  console.log(sum(10));
