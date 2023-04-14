// Description

// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


// Input
// Input Format

// First line contains N

// The second line contains N integers separated by spaces.

// Constraints

// N < 100

// The array contains integers only


// Output
// Print one integer, the one which is present the maximum number of times.


// Sample Input 1 

// 5
// 0 2 0 6 9
// Sample Output 1

// 0
// Hint

// Sample 1 Explanation

//*********************************************************************************************************

function maximumOccuringElement(A,N){
   let obj={},max=0,num;
   for(let el of A){
       obj[el]?obj[el]++:obj[el]=1
   }
   for(let i=0;i<N;i++){
       if(max<obj[A[i]]){
          max=obj[A[i]]
          num=A[i]
       
       }
   }
  console.log(num)
}
