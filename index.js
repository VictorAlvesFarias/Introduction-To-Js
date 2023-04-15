let title_animation = document.getElementById('title_identifier')
let java_script = ["J","a","v","a"," S","c","r","i","p","t"]
let java_script_oposto = ["Java Script","Java Scrip","Java Scri","Java Scr"," Java Sc","Java S","Java ","Jav","J","Js"]
let info_site_paragraph_container = document.getElementById('info_site_paragraph_container_identifier') 
let responsive_navbar_container = document.getElementById('responsive_navbar_identifier')
let header = document.getElementById('header_identfier')

function open_info_site() {
    info_site_paragraph_container.getAttribute='class'
    info_site_paragraph_container.style.display ="block"
    info_site_paragraph_container.style.transition ="0.5s"
    setTimeout( function objetivo_site_sair() {
        info_site_paragraph_container.style.opacity= "1"  
        }, 300);
}

function close_info_site() {
    info_site_paragraph_container.getAttribute='class'
    info_site_paragraph_container.style.opacity= "0" 
    setTimeout( function objetivo_site_sair() {
        info_site_paragraph_container.style.display =""
        }, 300);
}

function responsive_navbar() {
    if (responsive_navbar_container.className =='responsive_navbar_closed') {
        responsive_navbar_container.className = 'responsive_navbar_opened'
    } else {
        responsive_navbar_container.className = 'responsive_navbar_closed'
    }
}

function open_title_animation() {
    if (title_animation.innerText == "Js") {
        title_animation.getAttribute='class'
        title_animation.className='title_hovering'
        title_animation.innerText = ""

        setTimeout(function() {
            for (let i = 0; i < java_script.length; i++) {
                setTimeout(function() {
                    title_animation.innerText += java_script[i];            
                }, 100*i);
            }                
        }, 100);
    }
}

function close_title_animation() {
    setTimeout(function() {
        if (title_animation.innerText == "Java Script") {
            title_animation.getAttribute='class'
            title_animation.className='title'

            for (let i = 0; i < java_script_oposto.length; i++) {
                setTimeout(function() {
                    title_animation.innerText = java_script_oposto[i]
                }, 50*i);
            }  
        }        
    }, 1200);
}