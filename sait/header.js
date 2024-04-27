// console.log("sgdsdf");

let qpick = document.querySelector(".headerr");
let q = document.querySelector(".headerr").querySelector("h2");
function updateText(){
    if (qpick.offsetWidth <= 440) {
        q.textContent = "Q";
    } else {
        q.textContent = "QPICK";
    } 
}
window.addEventListener("resize", function(){
    updateText();
});
updateText();




let openModalButton = document.getElementById("button_reg");
let overlay = document.getElementById("overlay");
let er = document.querySelector(".er");
let wrapper = document.querySelector(".wrapper");

const b = document.body;
openModalButton.addEventListener("click", function(){
    overlay.style.display = "flex";
    er.style.display = "flex";
    wrapper.style.display = "block";
    b.classList.add('noscroll');
});

window.addEventListener("click", function(event){
    if (event.target == overlay) {
        overlay.style.display = "none";
        er.style.display = "none";
        wrapper.style.display = "none";
        document.querySelector(".all_categori").style.display = "none";
        b.classList.remove('noscroll');
    }
});

/* o.addEventListener("click", function(event){
    if (event.target == o) {
        overlay.style.display = "none";
    }
}); */


/* let card_tovar_full = document.getElementsByClassName("card23");
let card_display_none = document.querySelector(".card_display_none");
let big_card_poz = document.querySelector(".big_card_poz");

for(let i = 0; i < card_tovar_full.length; i++){
    card_tovar_full[i].addEventListener("mouseover", function() {
        console.log("Наведение мыши на элемент " + i);
        console.log(i);
        // if(-1 < i < 3){
        //     big_card_poz.style.top = "90px";
        // }
        // if(p===3 || p===4 || p===5){
        //     big_card_poz.style.top = "580px";
        // }
        // if(p===6 || p===7 || p===8){
        //     big_card_poz.style.top = "1070px";
        // }
        big_card_poz.style.top = calculateTopPosition(i);
        card_display_none.style.display = "block";
    });
}
big_card_poz.addEventListener("mouseout", function() {
    card_display_none.style.display = "none";
});
function calculateTopPosition(index) {
    if(index < 3) {
        return "90px";
    } else if(index < 6) {
        return "580px";
    } else {
        return "1070px";
    }
} */