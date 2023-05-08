const person ={
    fullName: function(city, country){
        return this.firstName+" "+this.lastName+", "+this.city+", "+this.country;
    }
}
const data = {
    firstName:"Santu",
    lastName:"Das"
}
person.fullName.apply(person["Bankura", "India"]); //appply() function use 
