// alert('hello world')
function myFunc(){
    var x = document.getElementById("my-nav");
    if(x.className === "navigation"){
        x.className += " resnav";
    }
    else{
         x.className = "navigation";
    }
}