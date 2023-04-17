function twoPrimes(a,b) {
    count1=0
    count2=0
for(let i=2;i<b;i++){
    if(b%i==0){
        count1++
    }
}
for(let i=2;i<a;i++){
    if(a%i==0){
        count1++
    }
}
   if(count1==0 && count2==0){
       console.log("True")
   }else{
       console.log("False")
   }
}