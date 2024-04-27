let tel = document.querySelector("#tel");
let mail = document.querySelector("#email");
let name = document.querySelector("#name");
let submit = document.querySelector("#submit");
let submit_2 = document.querySelector("#submit_2");
let skr = document.querySelector(".skr");
let skr_2 = document.querySelector(".skr_2");
let w = document.querySelector('.wrapper');
let h_1 = document.querySelector('.wrapper').querySelector('h1');
let users = {};

function User(t, m, ...rest){
    this.t = t;
    this.m = m;
    this.n = rest;
} 

function create_id(users){
    return Object.keys(users).length;
}

submit.addEventListener("click", () => {
    const tel_v = tel.value;
    const mail_v = mail.value;
    const name_v = name.value;
    const user = new User(tel_v, mail_v, name_v);
    const id_user = "User" + create_id(users);
    users[id_user] = user;
    //Добавить проверку на существование элемента name
    const firstUserValues = Object.values(users)[create_id(users)-1];
    let yu = firstUserValues.n[0];
    console.log(yu);
    
    if(h_1.textContent==="Регистрация"){
        submit_2.click();
    }

    console.log(users);
    // alert("Привет " + name_v);
    tel.value = null;
    mail.value = null;
    name.value = null;
});

submit_2.addEventListener("click", () => {
    if (skr.classList.contains("skr") == true){
        skr.classList.remove("skr");
        w.style.height = "460px";
        skr_2.classList.remove("skr_2");
        h_1.textContent = "Регистрация";
        submit.textContent = "Отправить";
    }
    else{
        skr.classList.add("skr");
        skr_2.classList.add("skr_2");
        w.style.height = "400px";
        h_1.textContent = "Войти";
        submit.textContent = "Вход";
    }
});