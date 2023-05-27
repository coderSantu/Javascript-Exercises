setTimeout(function(){
    console.log("Hello I'm Asynchronous Function");
},2000);                                             //asyn fun(); call 2s.


function geting(){
    console.log("Automatic Call");
}
setTimeout(geting,3000); //asyn callback fun(); call 3s.