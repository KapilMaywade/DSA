const sell=(n,arr)=>{
    let buy=Infinity,sell=0,max=0
    for(let i=0;i<n;i++){
       for(let j=i+1;j<n;j++){
           if(arr[i]<arr[j]){
               diff=arr[j]-arr[i]
               if(diff>max){
                   max=diff
               }
           }
       }
    }
    console.log(max)
}
