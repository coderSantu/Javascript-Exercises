const person ={
    firstName:"Santu",
    lastName:"Das",
    language:"",
    set lang(lang){
        this.language = lang;
    }
}
person.lang = "Bengali"; //set lang
console.log(person);