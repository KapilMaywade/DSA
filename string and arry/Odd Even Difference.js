// given array of size n 
// find absolute diff between sum of odd position and even postion
// 1 base indexing



//********************************************

const Odd_Even_diff=(n,arr)=>{
    let odd=0,ev=0
    arr.sort((a,b)=>a-b)
    for(let i=0;i<n;i++){
        let p=i+1
        if(p%2==0){
            ev+=arr[i]
        }
        else{
            odd+=arr[i]
        }
    }
    console.log(Math.abs(odd-ev))
}
