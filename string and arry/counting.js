const Digit=(n,arr)=>{
    let obj={}
    for(let el of arr){
        obj[el]?obj[el]++:obj[el]=1
    }
    
    let ans=[]
    for(let i=0;i<=9;i++){
        if(obj[i]===undefined){
            ans.push(0)
        }
        else{
            ans.push(obj[i])
        }
        
    }
    
    console.log(ans.join(" "))
}



function runProgram(input) {
   input = input.trim().split('\n');
   let tc=+input[0],j=1
   for(let i=0;i<tc;i++){
       let n=+input[j++]
       let arr=input[j++].trim().split("").map(Number)
       Digit(n,arr)
   }

}
 
if (process.env.USER === "") {
 runProgram(``);
} else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
 process.stdin.on("end", function () {
   read = read.replace(/\n$/, "");
   read = read.replace(/\n$/, "");
   runProgram(read);
 });
 process.on("SIGINT", function () {
   read = read.replace(/\n$/, "");
   runProgram(read);
   process.exit(0);
 });
}
