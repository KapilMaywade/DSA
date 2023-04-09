function solve(N,arr){
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    console.log(arr.join(" "))
}
