

const SortingN=(n,k,arr)=>{
    arr.sort((a,b)=>{
        return a%k-b%k
    })
    console.log(arr.join(" "))
}
