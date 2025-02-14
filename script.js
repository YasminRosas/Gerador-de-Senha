let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button"); 

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    let alerta = document.getElementById("alerta");
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.classList.add("show");
    }, 10);

    setTimeout(() => {
        alerta.classList.remove("show");
        setTimeout(() => alerta.style.display = "none", 500);
    }, 3000);

    navigator.clipboard.writeText(novaSenha);
}