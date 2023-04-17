function checkBasket(N,B){
    // write code here
    flage="Single Type"
    for(let i=1;i<N;i++){
        if(B[0]!==B[i]){
            flage="Mixed Basket"
        }
    }
    console.log(flage)
}