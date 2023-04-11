// Description

// Given an array of sizeNand a numberK

// You have to find the longest subarray whose sum is less than or equal toK.


// Input
// The first line of the input contains`T`, the number of test cases.

// The first line of each test case, contains`N`and`K`, the number of elements in the array and the number K

// The next line contains`N`space-separated integers, denoting elements of the array.

// * * *

// **Constraints**

// 1 <=`T`<= 10

// 1 <=`N`<= 10^6

// 1 <=`K`<= 10000

// 1 <=`A[i]`<= 1000


// Output
// For each test case, print the length of the longest subarray with the given condition.


// Sample Input 1 

// 2
// 5 8
// 1 2 3 4 5
// 5 10
// 1 2 3 4 5
// Sample Output 1

// 3
// 4
// **********************************************************************************************************


const Longest_Sub_Array=(n,k,arr)=>{
    let i=0,j=0,sum=arr[0],len=1,max=0
    while(j<n){
        if(sum<=k){
            if(len>max){
                max=len
            }
            sum+=arr[++j]
            len++
        }
        else{
            sum-=arr[i++]
            len--
        }
    }
    console.log(max)
}
