<<<<<<< HEAD
let result = document.getElementById('ocult_result_calculator').innerHTML;
let title_identifier = document.getElementById('title_identifier');
let style_site =  window.document.getElementById('style_site')

function insert(num) {
    document.getElementById('ocult_result_calculator').innerHTML += num;
    document.getElementById('result_calculator').innerHTML += num;
}

function insert_simbols(num,num_style) {
    document.getElementById('result_calculator').innerHTML += num_style;
    document.getElementById('ocult_result_calculator').innerHTML += num;
}

function clear(num) {
    document.getElementById('ocult_result_calculator').innerHTML = ('');
    document.getElementById('result_calculator').innerHTML = ('');
}  

function equal() {
    result = document.getElementById('ocult_result_calculator').innerHTML;
    document.getElementById('ocult_result_calculator').innerHTML = eval(result);
    document.getElementById('result_calculator').innerHTML = eval(result);
}  



function clickbutton(){
    let n1 = Number(window.prompt('Diga um numero amigo!'))
    let n2 = Number(window.prompt('Diga mais um numero amigo!'))
    let s = n1 + n2
    window.alert ("O resultado da soma dos dois numeros é "+s);
}

function clickbutton1(){
    title_identifier.style.color = "white";
}

function clickbutton1_5(){
    title_identifier.style.color = "";
}

function clickbutton2(){
    let input_years = Number(window.prompt('Diga Sua Idade:'))
    let aprove =  'Você tem 18 ou mais anos de idade' 
    let not_aprove = 'Você nao tem mais de 18 anos'
    window.alert( +input_years >= 18 ? aprove : not_aprove )
}

function clickbutton3(){
    style_site.getAttribute('href')
    style_site.href = './basic_js.css'  
}

function clickbutton3_5(){
    style_site.getAttribute('href')
    style_site.href = '../../index.css'
=======
let result = document.getElementById('ocult_result_calculator').innerHTML;
let title_identifier = document.getElementById('title_identifier');
let style_site =  window.document.getElementById('style_site')

function insert(num) {
    document.getElementById('ocult_result_calculator').innerHTML += num;
    document.getElementById('result_calculator').innerHTML += num;
}

function insert_simbols(num,num_style) {
    document.getElementById('result_calculator').innerHTML += num_style;
    document.getElementById('ocult_result_calculator').innerHTML += num;
}

function clear(num) {
    document.getElementById('ocult_result_calculator').innerHTML = ('');
    document.getElementById('result_calculator').innerHTML = ('');
}  

function equal() {
    result = document.getElementById('ocult_result_calculator').innerHTML;
    document.getElementById('ocult_result_calculator').innerHTML = eval(result);
    document.getElementById('result_calculator').innerHTML = eval(result);
}  



function clickbutton(){
    let n1 = Number(window.prompt('Diga um numero amigo!'))
    let n2 = Number(window.prompt('Diga mais um numero amigo!'))
    let s = n1 + n2
    window.alert ("O resultado da soma dos dois numeros é "+s);
}

function clickbutton1(){
    title_identifier.style.color = "white";
}

function clickbutton1_5(){
    title_identifier.style.color = "";
}

function clickbutton2(){
    let input_years = Number(window.prompt('Diga Sua Idade:'))
    let aprove =  'Você tem 18 ou mais anos de idade' 
    let not_aprove = 'Você nao tem mais de 18 anos'
    window.alert( +input_years >= 18 ? aprove : not_aprove )
}

function clickbutton3(){
    style_site.getAttribute('href')
    style_site.href = './basic_js.css'  
}

function clickbutton3_5(){
    style_site.getAttribute('href')
    style_site.href = '../../index.css'
>>>>>>> ad4ef94754bf69111b435b89646f460170be3ecb
}