// Description

// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code


// Input
// Input Format :

// First line contains N which is the number of integers present in both the arrays.

// Second line contains N sorted integers which are elements of first array.

// Third line contains N sorted integers which are elements of second array.



// Constraints :

// N < 1000


// Output
// Output the array formed after merging elements such that it is sorted


// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9
// **************************************************************************************************************************
const Merging=(n,arr1,arr2)=>{
    let l=0,r=0,ans=[],result=[]
    while(l<n || r<n){
       
            if(arr1[l]<arr2[r]){
            ans.push(arr1[l])
            l++
        }
        else if(arr1[l]>arr2[r]){
            ans.push(arr2[r])
            r++
        }
        else{
            if(l!==n ||r!==n){
                ans.push(arr1[l])
            ans.push(arr2[r])
            l++,r++
            }
            
        }
        
    }
    for(let el of ans){
        if(el!==undefined){
            result.push(el)
        }
    }
    console.log(result.join(" "))
    
}

function runProgram(input) {
   input = input.trim().split('\n');
   let n=+input[0]
   let arr1=input[1].trim().split(" ").map(Number)
   let arr2=input[2].trim().split(" ").map(Number)
Merging(n,arr1,arr2)
}
 
if (process.env.USER === "") {
 runProgram(``);
} else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
 process.stdin.on("end", function () {
   read = read.replace(/\n$/, "");
   read = read.replace(/\n$/, "");
   runProgram(read);
 });
 process.on("SIGINT", function () {
   read = read.replace(/\n$/, "");
   runProgram(read);
   process.exit(0);
 });
}
