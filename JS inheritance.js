class Car{
    Constructor(brand){
        this.carName= brand;
    }
    present(){
        return "i have a "+this.carName;
    }
}
class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.Model=mod;
    }
    show(){
        return this.present()+" it is a "+this.Model; 
    }
}
let myCar = new Model("Ford", "TATA");
console.log(myCar.show());