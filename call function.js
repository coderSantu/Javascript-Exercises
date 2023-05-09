const person = {
    fullName: function(){
        return firstName+" "+lastName;
    }
}
const data ={
    firstName:"Santu",
    lastName: "Das"
}
person.fullName.call(data);