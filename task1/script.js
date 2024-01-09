alertbox=document.querySelector(".alertbox");
popupbox=document.querySelector(".popupbox");
function run(){
alertbox.style.display="block";
window.addEventListener("click",function(){
    popupbox.style.display="none";
})
}
