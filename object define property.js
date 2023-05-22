const person = {
    firstName:"Santu",
    lastName:"Das"
}

//Use object.defineProperty();

Object.defineProperty(person,"fullName",{
    get:function(){
        return this.firstName+" "+this.lastName;
    }
});
console.log(person.fullName);