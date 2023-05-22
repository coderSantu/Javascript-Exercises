const persone = {
    name:"Santu", 
    gender:"Male",
    age: 26
}
persone.name;
persone.age; //for Dynamic
let a = "age";
console.log(persone[a]);

//anothre program.

const persone2 = {
    fName: "Riya ",
    lName: "Das ",
    age: 34
 }
persone2.country = " India"; /*---from outside----*/
let text ="";
for(let x in persone2){
    text+=persone2[x];
}
console.log(text);
//add "city" object propartes from outside
persone2.city=" Kolkata";
console.log(persone2);

delete persone.gender; //delete persone object propartes and value

console.log(persone);
console.log(persone.name.toUpperCase()); // use .toUpperCase();
