<<<<<<< HEAD

function repeater(){
    var  result_generator_paragraph = document.getElementById('result_generator_paragraph_identifier')
    var  while_repeater_string = document.getElementById('while_repeater_string_identifier').value
    var while_repeater_value = document.getElementById('while_repeater_value_identifier').value
    var repeat_quantity = 1

        for(let i = 5; i <= while_repeater_value; i++) {
        (function(i) {
            setTimeout(function() {
        document.getElementById("while_repeater_loading_identifier").style.width  = `${Math.floor((i/while_repeater_value)*100)}%`
            }, 80*i);
        })(i++)}
        
        while (repeat_quantity <= while_repeater_value) {
                (function(repeat_quantity) {
                    setTimeout(function() {
                        result_generator_paragraph.innerHTML  += while_repeater_string    
                    }, 80*repeat_quantity);
                })(repeat_quantity++)
        }
}    

function see_the_animation() {
    var window_flap = document.getElementsByClassName("window_flap")
    var monster = document.getElementById("monster")
    var monster_head_eyes = document.getElementsByClassName("monster_head_eyes")

    for (let i = 0; i < window_flap.length; i++) {
        window_flap[i].style.width="20%";
    }
    setTimeout(function()  {
        monster.style.display="unset"
    }, 900);

    setTimeout(function()  {
        monster.style.opacity="1"
    }, 1000);

    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 1300);
    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 2300);
    setTimeout(function()  {
        monster.style.opacity="0"
    }, 4500);

    setTimeout(function()  {
        monster.style.display="none"
    }, 5500);

    setTimeout(function() {
        for (let i = 0; i < window_flap.length; i++) {
            window_flap[i].style.width="";
        }
    }, 6000);
}
=======

function repeater(){
    var  result_generator_paragraph = document.getElementById('result_generator_paragraph_identifier')
    var  while_repeater_string = document.getElementById('while_repeater_string_identifier').value
    var while_repeater_value = document.getElementById('while_repeater_value_identifier').value
    var repeat_quantity = 1

        for(let i = 5; i <= while_repeater_value; i++) {
        (function(i) {
            setTimeout(function() {
        document.getElementById("while_repeater_loading_identifier").style.width  = `${Math.floor((i/while_repeater_value)*100)}%`
            }, 80*i);
        })(i++)}
        
        while (repeat_quantity <= while_repeater_value) {
                (function(repeat_quantity) {
                    setTimeout(function() {
                        result_generator_paragraph.innerHTML  += while_repeater_string    
                    }, 80*repeat_quantity);
                })(repeat_quantity++)
        }
}    

function see_the_animation() {
    var window_flap = document.getElementsByClassName("window_flap")
    var monster = document.getElementById("monster")
    var monster_head_eyes = document.getElementsByClassName("monster_head_eyes")

    for (let i = 0; i < window_flap.length; i++) {
        window_flap[i].style.width="20%";
    }
    setTimeout(function()  {
        monster.style.display="unset"
    }, 900);

    setTimeout(function()  {
        monster.style.opacity="1"
    }, 1000);

    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 1300);
    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 2300);
    setTimeout(function()  {
        monster.style.opacity="0"
    }, 4500);

    setTimeout(function()  {
        monster.style.display="none"
    }, 5500);

    setTimeout(function() {
        for (let i = 0; i < window_flap.length; i++) {
            window_flap[i].style.width="";
        }
    }, 6000);
}
>>>>>>> ad4ef94754bf69111b435b89646f460170be3ecb
