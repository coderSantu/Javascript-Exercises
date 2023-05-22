const myDetails = {
    firstName: "Santu",
    lastName:"Das",
    fullName: ()=>{
    this.firstName+" "+this.lastName;
    }
};
console.log(myDetails.fullName);