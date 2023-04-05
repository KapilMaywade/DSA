// Description

// Alice is playing a game with his little brother Adam. Alice gives Adam, a stringA, and along with it a bag which contains characters made up of clay are kept.

// Adam has to make the stringA, given to him by Alice, with the help of these characters in the bag. Find out if he can make the string or not.

// Note: The stringAand the bag, both contain only small case characters

// Input
// The first line of the input containsN, the number of characters in the bag.

// The next line containsNcharacters, indicating the characters present in the bag.

// The next line containsMcharacters indicating the length of the stringA.

// The next line contains the string itself.

// Constraints

// 1 <=N, M<= 10^4


// Output
// For each test case, printYes, if Adam can make the string using the characters in the bag, else printNo


// Sample Input 1 

// 5
// aabbc
// 3
// abc
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// aabbc
// 4

// abcd
// Sample Output 2

// No
// Hint

// In the first sample test , the bag contains the characters present in the stringaabbc,and the string Adam has to form isabc. It can be clearly seen that using the characters of the bag, the string can be formed. Therefore, the output isYes

// In the second test case, the string to be formed isabcd. But, the bag does not contain the characterd. Therefore, the string cannot be formed. Therefore, the output isNo

//************************************************************************************************************************************************************

const BagOFLetter=(str1,str2)=>{
    let obj={}
    for(let el of str1){
       obj[el]?obj[el]++:obj[el]=1
    }
    // console.log(obj)
    for(let el of str2){
        let elem=obj[el]
        if(elem==undefined || elem==0){
            console.log("No")
            return
        }
        else if(elem!==undefined || elem!==0){
            obj[el]--
        }
        
    }
    console.log("Yes")
   
}


