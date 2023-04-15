setInterval( function() {
    var animated_square = document.getElementById('animated_square_identifier_with_shadow')
    if(animated_square.style.boxShadow == "yellow 0px 0px 0px"){
        animated_square.style.boxShadow = "yellow 0px 0px 20px"
    }
    else {
        animated_square.style.boxShadow = "yellow 0px 0px 0px"
    }
}, 2000);

setInterval( function() {
    var qdn2 = document.getElementById('animated_square_identifier_with_border_radius')
    if(qdn2.style.borderTopRightRadius == "25%")
    
    { qdn2.style.borderTopRightRadius ="0%"
    qdn2.style.borderBottomLeftRadius ="0%"
    qdn2.style.borderTopLeftRadius ="25%"
    qdn2.style.borderBottomRightRadius ="25%"
    }

    else {
        qdn2.style.borderTopRightRadius ="25%"
        qdn2.style.borderBottomLeftRadius ="25%"
        qdn2.style.borderTopLeftRadius ="0%"
        qdn2.style.borderBottomRightRadius ="0%"
    }
}, 2000);

setInterval( function() {
var eye = document.getElementById('eye_identifier')

    if(eye.style.height == "20px"){ 
        eye.style.height = "0px"
    }

    else {
        eye.style.height ="20px"
    }

}, 2000);





function verify_age() {
    var age_test_result = document.getElementById('age_test_result_identifier')
    var age_test_input = document.getElementById('age_test_input_indentifier').value
    if (age_test_input <= 16) {
        age_test_result.innerHTML = "Voto Opcional"
    }
    else if (age_test_input >= 69) {
        age_test_resutlt.innerHTML = "Voto Opcional"
    }
    else if (age_test_input >= 18) {
        age_test_result.innerHTML = "Voto Obrigatorio"
    }
}

