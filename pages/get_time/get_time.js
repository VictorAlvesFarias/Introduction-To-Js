let mini_seconds = document.getElementById("mini_seconds_identifier")
let hours = document.getElementById("hours_identifier")
let minutes = document.getElementById("minutes_identifier")
let seconds = document.getElementById("seconds_identifier")

setInterval(() => {
    mini_seconds.innerHTML = new Date().getMilliseconds();

    hours.innerHTML = new Date().getHours();

    minutes.innerHTML = new Date().getMinutes();

    seconds.innerHTML = new Date().getSeconds();
}, 1);

function unlock_ilumipizza() {
    var switch_and_get_time_content = document.getElementById('switch_and_get_time_content_identifier')
    switch_and_get_time_content.style.opacity= "0"

    setTimeout(function() {
        switch_and_get_time_content.style.display="none"
    }, 600);
    setTimeout(function() {
        switch_and_get_time_content.innerHTML ="Conteudo Desbloqueado"
    }, 700);

    setTimeout(function() {
    var unlock_content = document.getElementById('unlock_content_identifier')
    unlock_content.style.display ="flex"
    }, 800);
    setTimeout(function() {
        var unlock_content = document.getElementById('unlock_content_identifier')
        unlock_content.style.height="100%"
        unlock_content.style.opacity ="1"
    }, 1200);
}

function switch_and_get_time_verify(){
    var status_day_paragraph = document.getElementById('status_day_identifier')
    var status_day = new Date().getDay()
    switch (status_day) {
        case 1:
            status_day_paragraph.innerHTML =`Hoje é Segunda, Faltam ${status_day} dia( s ) para o conteudo ser desbloqueado`
            break;
        case 2:
            unlock_ilumipizza()
            break;   
        case 3:
            status_day_paragraph.innerHTML =`Hoje é Quarta, Faltam ${status_day-1} dia (s) para o conteudo ser desbloqueado`
            break;
        case 4:
            status_day_paragraph.innerHTML =`Hoje é Quinta, Faltam ${status_day-3} dia (s) para o conteudo ser desbloqueado`
            break;
        case 5:
            unlock_ilumipizza()
            break;   
        case 6:
            status_day_paragraph.innerHTML =`Hoje é Quinta, Faltam ${status_day-3} dia (s) para o conteudo ser desbloqueado`
            break;
        case 0:
            status_day_paragraph.innerHTML =`Hoje é Domingo, Faltam ${status_day+2} dia (s) para o conteudo ser desbloqueado`
            break;
        default:
            status_day_paragraph.innerHTML ="Erro_404"
            break;
    }
}   

function eat_button() {
    var pizza_img = document.getElementById('pizza_img_identifier')
    var img_code = document.getElementById("img_code_identifier")

     if ( img_code.innerText == "imagem1") {
        img_code.innerHTML = "imagem2"
        pizza_img.src = "../../img/iluizza2.png"
    }
    else if ( img_code.innerText == "imagem2") {
        img_code.innerHTML = "imagem3"
        pizza_img.src = "../../img/iluizza3.png"
    }
    else if ( img_code.innerText == "imagem3") {
        img_code.innerHTML = "imagem4"
        pizza_img.src = "../../img/iluizza4.png"
    }
    else if ( img_code.innerText == "imagem4") {
        img_code.innerHTML = "imagem5"
        pizza_img.src = "../../img/iluizza5.png"
    }
    else if ( img_code.innerText == "imagem5") {
        img_code.innerHTML = "imagem6"
        pizza_img.src = "../../img/iluizza6.png"
    }
    else if ( img_code.innerText == "imagem6") {
        img_code.innerHTML = "imagem7"
        pizza_img.src = "../../img/iluizza7.png"
    }
    else if ( img_code.innerText == "imagem7") {
        img_code.innerHTML = "imagem8"
        pizza_img.src = "../../img/iluizza8.png"
    }
    else if ( img_code.innerText == "imagem8") {
        img_code.innerHTML = "imagem9"
        pizza_img.src = "../../img/iluizza9.png"
        setTimeout(function() {
            var unlock_content = document.getElementById('unlock_content_identifier')
            unlock_content.style.opacity="0"
            setTimeout(function()  {
                unlock_content.style.height="0"
            }, 700);
            setTimeout(function() {
                unlock_content.style.display="none"
            }, 1200);
            setTimeout(function() {
                var continue_menssage = document.getElementById('continue_menssage_identifier')
                continue_menssage.style.visibility="visible"
            }, 1250);
        }, 1300);
    }
}
