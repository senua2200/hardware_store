let elements = document.getElementsByClassName("card23");
// let g = document.querySelector("#g");
// let g2 = document.querySelector("#g2");
let len_control = 0;
let len = 0;
// g.textContent = localStorage.getItem("lll");
// g2.textContent = localStorage.getItem("lll");
for (let i = 0; i < elements.length; i++) {
    // elements[i].addEventListener("mouseover", function() {
    //     // Ваш код обработки события наведения мыши здесь
    //     console.log("Наведение мыши на элемент " + i);
    // });
    elements[i].onclick = function() {
        if(localStorage.getItem("lll")){
            len = localStorage.getItem("lll");
        }
        len++; 
        if (len_control != len){
            let data = {
                name: elements[i].querySelector('h2').innerHTML,
                price: elements[i].querySelector(".price_scr").innerHTML,
                img: elements[i].querySelector('.img_gem').src
            };
            localStorage.setItem("dart" + len, JSON.stringify(data));
            // localStorage.setItem("lol", JSON.stringify(data));
            // console.log(localStorage);

            len_control = len;
        }

        localStorage.setItem("lll", len);

        // Здесь обновляется количество товаров в корзине
        g.textContent = len;
        g2.textContent = len;
    };
}
console.log(localStorage.length);
