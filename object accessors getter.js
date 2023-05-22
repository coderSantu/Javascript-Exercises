//ECMA Script 5 2009 introduced getter and setter function. 
const person = {
    firstName:"Santu",
    lastName:"Das",
    language:"Bengali",
    get lang() //getter function "get();"
    {
        return this.language;
    }
};
console.log(person.lang);