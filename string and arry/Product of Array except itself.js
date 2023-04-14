// Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i].
// Solve it without division operator in O(n) time.


//************************************************************************************************************
let left=new Array(arr.length).fill(0)
let right=new Array(arr.length).fill(0)
let result=[]
left[0]=1
right[arr.length-1]=1

for(let i=1;i<n;i++){
  left[i]=arr[i-1]*left[i-1]
}
for(let i=n-2;i>=0;i--){
  right[i]=arr[i+1]*right[i+1]
}
for(let i=0;i<n;i++){
  result[i]=left[i]*right[i]
}
console.log(result)
