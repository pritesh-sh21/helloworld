const arr=[1,2,3,5,6];
let sum=arr.reduce((acc,curr)=>{
   return acc+curr;
})
sum++;
console.log(sum);