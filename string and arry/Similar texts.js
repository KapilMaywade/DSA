


const text=(virat,rohit)=>{
    let v=virat
    let r=rohit
    let count=0
    let obj={}
    for(let el of v){
        obj[el]=obj[el]?obj[el]+1:1
    }
    // console.log(obj)
    
    for(let el of r){
        if(obj[el]!=undefined &&obj[el]>0){
            obj[el]--
            count++
        }
    }
    console.log(count)
    
