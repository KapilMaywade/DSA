const Lift=(str)=>{
    let count=1
    for(let i=1;i<str.length;i++){
        if(str[i]!==str[i-1]){
            count++
        }
    }
    console.log(count)
}
