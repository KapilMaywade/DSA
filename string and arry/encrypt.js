// Encrypt It
// Description

// Encryption is the process of converting a plaintext message into ciphertext which can be decoded back into the original message. An encryption algorithm along with a key is used in the encryption and decryption of data. There are several types of data encryptions which form the basis of network security. Encryption schemes are based on block or stream ciphers.

// Today, your task is to encrypt and print the encrypted string. You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.

// Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . All Symbols, such as - , ; %, should remain unencrypted.

// Look at the sample test case for better understanding.


// Input
// Input Format

// First line of input contains a single line of string 'S'

// Second line contains the number, encrypt key  K

// Constraints

// S contains alpha, numeric and symbols

// 0<=N<=1000




// Output
// Print the encrypted string.


// Sample Input 1 

// All-convoYs-9-be:Alert1.
// 4
// Sample Output 1

// Epp-gsrzsCw-3-fi:Epivx5.
// Hint

// Sample 1 Explanation

// A becomes E, Y becomes C, 9 becomes 3,

// -, . unchanged.


//*****************************************************************************************************************

const encript=(n,str)=>{
    let arr=[...str]
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower="abcdefghijklmnopqrstuvwxyz"
    let num=[0,1,2,3,4,5,6,7,8,9]
    let result=""
    for(let i=0;i<str.length;i++){
        if(upper.includes(arr[i])){
            let index=upper.indexOf(arr[i])
            let p=index+n
            result+=upper[p%26]
        }
        else if(lower.includes(arr[i])){
            let index=lower.indexOf(arr[i])
            let p=index+n
            result+=lower[p%26]
        }
        else if(num.includes(+arr[i])){
            let index=num.indexOf(+arr[i])
            let p=index+n
            // console.log(index,p)
            result+=num[p%10]
        }
        else{
            result+=arr[i]
        }
        
    }
    console.log(result)
}
