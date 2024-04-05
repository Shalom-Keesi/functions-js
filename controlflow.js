// Write a program that takes in an array of numbers and 
// consoles the first four items multiplied by itself and the last two added by 10. 
// Return the array with the new values
function operateOnArray(examples){
    examples.forEach((example,index)=>{
        if(index<4){
            examples[index]=example*8
        }
        else if (index>= examples.length-2){
            examples[index]=example+5
        }

    });
    console.log(examples);
}
let examples=[10,20,30,40,50,60];
operateOnArray(examples)
// Write a program that takes in the following array and use a 
// while loop to iterate and break when the item is equal to the 
// fourth index :let arrNum = [1,2,3,4,5,6,7,8,9]; 

function breakLoop(){
 const brokenLoop=arrNum.slice(0,5);
    while(brokenLoop){
        console.log(brokenLoop);
        break;
    }
  }
 let arrNum = [1,2,3,4,5,6,7,8,9];
breakLoop()

// Write a function that takes in a an array of strings and use a
//  continue statement when the item is at the second index: 
//  let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruitsArray(fruits){
    let index=0;
    while(index<4){
        index++;
        if(index/2===1)continue;
         console.log(fruits[index]);
        
    }

}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
fruitsArray(fruits)
// console.log(fruitsArray(fruits));

// Write a function that accepts an array of strings and 
// console.logs each element using a for loop

function stringsLoop(){
    arrayOfStrings.forEach(element => {
        console.log(element);
    });
}
let arrayOfStrings=["chair","table","bench","seat","couch"];
stringsLoop()

// Write a JavaScript function that takes a string as input and
//  reverses it using a while loop. The function should return
//  the reversed string.

function reverseString(string){
    let newString="";
    let index= string.length-1;
    while(index >=0){
        newString+= string[index];
        index--;
    }
    return newString;
};
const string="Kindergarten"
console.log(reverseString(string));
