let len = localStorage.length;
console.log(len+"df");

// let len = localStorage.getItem("len");
// console.log(len);
for (let rt = 1; rt <= len; rt++){
    let jsonData = localStorage.getItem("dart" + rt);
    if (jsonData == null) {
        console.log("Ничего не передалось!!!");
    } else {
        let parsedData = JSON.parse(jsonData);
        // let cardTovar = document.querySelector(".card_price");
        
        console.log(`${parsedData.name}, ${parsedData.price}, ${parsedData.img}`);

        // cardTovar.querySelector("h3").innerHTML = `${parsedData.name}`;
        // cardTovar.querySelector(".price_t").innerHTML = `${parsedData.price}`;
        // cardTovar.querySelector("#card_zastavka").src = `${parsedData.img}`;

        let mai = document.querySelector(".content_cards");
        let cont = `
            <div class="card_price">
            <div class="tovar">
                <img id="card_zastavka" src="${parsedData.img}" alt="">
                <div class="count">
                    <img class="min" src="../img/mi.svg" alt="">
                    <span class="number_count">1</span>
                    <img class="plu" src="../img/pl.svg" alt="">
                </div>
            </div>
            <div class="pr">
                <h3>${parsedData.name}</h3>
                <p class="price_t">${parsedData.price}</p>
            </div>
            <div class="del_dis">
                <img src="../img/basket_del.svg" alt="">
                <p class="discount">Sale 0%</p>
            </div>
            </div> 
        `;

        mai.innerHTML += cont;
        
    }
}