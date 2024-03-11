// Question 10 
// khulood 8/3/2024
console.log(3+9); // This program gives addition of two numbers

        // Question 11 
let names:string[] = ["Jack","Cartor","Harper","Grayson","Avery"]
 
for(let i = 0; i<names.length; i++){
   console.log(  names[i]);
}
// OR
for(let eachName of names){
    console.log( eachName);
 }
 
        // Question 12
for(let eachName of names){
    console.log(  `Hey ${eachName}, how are you`);
 }