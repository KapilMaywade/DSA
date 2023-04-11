// input 
// 5
// 2 1 5 4 3
// 5
// 3 2 1 2 1

// o/p
// 3

// ***********************************************






const fool=(n,m,arr1,arr2)=>{
    for(let i=0;i<m;i++){
        let times=arr2[i]
        let rem=arr1.splice(0,times)
        arr1=[...arr1,...rem]
       
    }
    console.log(arr1[0])
}
