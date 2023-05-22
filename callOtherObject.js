const data ={
    fullName:function(){
        return this.firstName+" "+this.lastName;
    },
    fullAddress:function(){
        return "Village: "+this.village+", Post Office: "+this.post+", Police Station: "+this.ps+", Postal Index Number: "+this.pin;
    }
}
const details = {
    firstName: "Santu",
    lastName: "Das"
}
const adderss ={
    village: "Arasul",
    post: "Sonjibon",
    ps: "Bankura",
    dist: "Bankura",
    pin: 745309
}
console.log(data.fullName.call(details));
console.log(data.fullAddress.call(adderss));
