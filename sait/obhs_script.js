let g = document.querySelector("#g");
let g2 = document.querySelector("#g2");
if(localStorage.getItem("lll") == null){
    console.log("Жопа");
}
else{
    g.textContent = localStorage.getItem("lll");
    g2.textContent = localStorage.getItem("lll");
}