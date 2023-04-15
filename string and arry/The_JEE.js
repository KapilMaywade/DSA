// Description

// JEE is one of the most prestigious exams. You need to implement ranking rule in it. Given marks of Physics, Chemistry and Mathematics of two students, Find out the winner using below rules:

//  If total marks of one student is greater than other, he/she wins

//  If total marks of both the students are same, then the one having more marks in Maths wins. In case their marks in maths are also same, the one whose marks in Physics is more wins the game.


// Input
// Input Format :
// First line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of first student

// Second line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of second student



// Constraints :

// Marks < 36000


// Output
// Output "First" (without quotes) if first student wins.

// In all other case print "Second"


// Sample Input 1 

// 120 90 70
// 90 80 110
// Sample Output 1

// Second
// Hint

// Output Explanation :

// Both students have equal total marks, that is 280 but second student has more marks in Maths, so he wins (gets better rank)

//**************************************************************************************************************


const JEE=(arr1,arr2)=>{
    let physics1=arr1[0],physics2=arr2[0]
    let math1=arr1[2],math2=arr2[2]
    let chemistry1=arr1[1],chemistry2=arr2[1]
    let score1=physics1+math1+chemistry1
    let score2=physics2+math2+chemistry2
    
    if(score1>score2){
        console.log("First")
    }
    else if(score1<score2){
        console.log("Second")
    }
    else if(score1===score2){
        if(math1>math2){
            console.log("First")
        }
        if(math1<math2){
            console.log("Second")
        }
        else{
            if(physics1>physics2){
               console.log("First") 
            }
            else if(physics1<physics2){
               console.log("Second") 
            }
        }
    }
}
