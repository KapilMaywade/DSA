function StringEquation(N, str) {
    str1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let a=0;
    
    
   for(let i=0;i<N;i++){
       for(let j=0;j<str1.length;j++){
           if(str[i]==str1[j]){
               a++
           }
           
       }
       b=N-a
   }console.log(5*b+3*a)
  }
  