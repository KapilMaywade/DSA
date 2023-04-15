function specificDiagonals(R, C, matrix, K){
    let index1=-1,index2=-1
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(matrix[i][j]===K){
                index1=i,index2=j
            }
        }
    }
    
    let sum=index1+index2
    let diff=index1-index2
    let left="",right=""
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(i+j==sum){
                right+=matrix[i][j]+" "
            }
            if(i-j==diff){
                left+=matrix[i][j]+" "
            }
        }
    }
    console.log(left)
    console.log(right)
  
}
