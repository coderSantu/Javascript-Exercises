const myNumbers={}
myNumbers[Symbol.iterator]=function(){
    let number = 0;
    let done = false;
    return{
        next(){
            number+=10; //incriment by ten
                if (number==100){
                    done=true
                }
                return{
                    value:number,
                    done:done
                }
        }
    }
}
for(let num of myNumbers){
    console.log(num);
}