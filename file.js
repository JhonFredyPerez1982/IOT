
let a=document.querySelector(".boton");
const box1=document.querySelector(".hi");
const box2=document.querySelector(".boton").style.display="block";
const box3=document.querySelector(".boton2").style.display="none";
a.addEventListener("click",funcion);
function boton(){
    box1.style.height=bottom="1px"; 
    box1.style.transition ="6000ms";
    }
    function funcion(){
    if(box1.style.height=="1px"){
        document.querySelector(".boton").style.display="none";
        document.querySelector(".boton2").style.display="block";
   } 
}