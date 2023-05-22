function Person(first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.fullName=function(){
        return "My name is "+this.firstName+" "+this.lastName+" and I am "+this.age+" year old my country is "+this.country;
    }
};
const nSantu = new Person('Santu', 'Das', 26);     // Passing object values
const nAritra = new Person('Aritra', 'Ghose', 25);
const nArijit = new Person('Priya', 'Roy', 24);
Person.prototype.country ="India"; // Add Country portotype
console.log(nSantu.fullName());
console.log(nAritra.fullName());
console.log(nArijit.fullName());