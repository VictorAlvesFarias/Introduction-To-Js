
//VAR DECLARATIONS------------------------------------------------------
let carousel_container = document.getElementById("carousel_container")

let carousel_childrens = carousel_container.children.length

let carousel_container_width = carousel_container.clientWidth

let carousel_scroll_width = carousel_container.scrollWidth


let slider_style = 1

let slider_value = 0

let scrool_value = 0

let slide_position_identification = document.getElementById("slide_position_identification")      

let page_purpose_text_container = document.getElementById("page_purpose_text_container")

let page_purpose_text_paragraph = document.getElementById("page_purpose_text_paragraph")

let page_purpose_close_text = document.getElementById("page_purpose_close_text")

let padlock_beam_right_animation = document.getElementById('padlock_beam_right_animation')

let unlock_animation = document.getElementById("unlock_animation");

let download_link = document.getElementById("download_link");

let loaded_projects = 0

let project_container = document.getElementsByClassName("project_container")

let initial_projects = 0

//VAR DECLARATIONS------------------------------------------------------
//
//
//
//
//slide_position_identification.removeChild(slide_position_identification.lastChild)
//PRESET SLIDER --------------------------------------------------------
carousel_container.appendChild(carousel_container.children[0].cloneNode(true))
carousel_container.appendChild(carousel_container.children[1].cloneNode(true))
for (let i = 0; i < carousel_container.children.length-2; i++) {
    slide_position_identification.innerHTML += `<div class="slide_position_identifier"></div>`
}
carousel_container.scrollLeft = carousel_container_width
//PRESET SLIDER --------------------------------------------------------
//
//
//
//
//
//CAROULSEL ------------------------------------------------------------

let slide_position_identifier = document.getElementsByClassName("slide_position_identifier")
slide_position_identifier[slider_value].style.backgroundColor = "yellow"



const update_slide_identification = {
    left() {
        if(slider_value>0) {
            slider_value-=1
            slide_position_identifier[slider_value+1].style.backgroundColor = "black"
            slide_position_identifier[slider_value].style.backgroundColor = "yellow"
        }
        else {
            slider_value = slide_position_identifier.length-1
            slide_position_identifier[0].style.backgroundColor = "black"
            slide_position_identifier[slider_value].style.backgroundColor = "yellow"
        }        
    },
    right() {
        if(slider_value<slide_position_identifier.length-1) {
            slider_value+=1
            slide_position_identifier[slider_value-1].style.backgroundColor = "black"
            slide_position_identifier[slider_value].style.backgroundColor = "yellow"
        }
        else {
            slider_value=0
            slide_position_identifier[slide_position_identifier.length-1].style.backgroundColor = "black"
            slide_position_identifier[slider_value].style.backgroundColor = "yellow"
        }        
    },
    restart(){
        for (let i = 0; i < slide_position_identifier.length; i++) {
            slider_value=0
            slide_position_identifier[i].style.backgroundColor = "black"
            slide_position_identifier[slider_value].style.backgroundColor = "yellow"
        }
        
    }
}
 
function update_containers_informations() {
    carousel_container_width = carousel_container.clientWidth
    carousel_scroll_width = carousel_container.scrollWidth
    carousel_childrens = carousel_container.children.length
}
            
function carousel_childrens_loop() {
    switch (slider_style) {
        case 1:
            carousel_container.removeChild(carousel_container.lastChild)
            carousel_container.removeChild(carousel_container.lastChild)

            carousel_container.appendChild(carousel_container.children[0].cloneNode(true))
            carousel_container.appendChild(carousel_container.children[1].cloneNode(true))
            carousel_container.appendChild(carousel_container.children[2].cloneNode(true))

            break;
        case 2:
            carousel_container.removeChild(carousel_container.lastChild)
            carousel_container.removeChild(carousel_container.lastChild)
            carousel_container.removeChild(carousel_container.lastChild)

            carousel_container.appendChild(carousel_container.children[0].cloneNode(true))
            carousel_container.appendChild(carousel_container.children[1].cloneNode(true))

            break;
        default:
            break;
    }
}

function slide_changer() {
    carousel_childrens_loop()    
    switch (slider_style) {
        case 1:
            for (let i = 0; i < carousel_container.children.length;i++) {
                carousel_container.children[i].className = "carousel_img_2"
            }              
            break;
        case 2:
            for (let i = 0; i < carousel_container.children.length;i++) {
                carousel_container.children[i].className = "carousel_img"
            }  
            break;
        default:
            break;
    }
    update_slide_identification.restart()
    set_slide_configs()
}

function set_slide_configs() {
    update_containers_informations()
    switch (slider_style) {
        case 1:
            carousel_container.scrollLeft = Math.trunc(carousel_container_width/100*40) 
            scrool_value = Math.trunc(carousel_container_width/100*40) 
            slider_style = 2
            break;
        case 2:
            carousel_container.scrollLeft = carousel_container_width
            scrool_value = carousel_container_width
            slider_style = 1
            break;
        default:
    }
}

function next_slide() {
    update_containers_informations()
    switch (slider_style) {
        case 1:
            if (scrool_value == carousel_container_width*6) {
                carousel_container.scrollLeft = carousel_container_width
                scrool_value = carousel_container_width
            }
            scrool_value += carousel_container_width
            for (let i = 0; i < carousel_container_width; i++) {
                setTimeout(() => {
                    carousel_container.scrollLeft += 1                    
                }, 0.5*i);
            }
            break;
        case 2:
            if(Math.trunc(carousel_container_width/100*60)*5+Math.trunc(carousel_container_width/100*40)==scrool_value) {
                carousel_container.scrollLeft = Math.trunc(carousel_container_width/100*40) 
                scrool_value = Math.trunc(carousel_container_width/100*40) 
            }
            scrool_value += Math.trunc(carousel_container_width/100*40)
            for (let i = 0; i < Math.trunc(carousel_container_width/100*60); i++) {
                setTimeout(() => {
                    carousel_container.scrollLeft += 1                    
                }, 0.5*i);
            }
            break;
        default:
            break;
    }

    update_slide_identification.right()
}

function return_slide() {
    update_containers_informations()
    switch (slider_style) {
        case 1:
            if (scrool_value == 0) {
                carousel_container.scrollLeft = carousel_container_width*6
                scrool_value = carousel_container_width*6
            }            
            scrool_value -= carousel_container_width        
            for (let i = 0; i < carousel_container_width; i++) {
                setTimeout(() => {
                    carousel_container.scrollLeft -= 1                    
                }, 0.5*i);
            }
            break;
        case 2:
            if(scrool_value == Math.trunc(carousel_container_width/100*40) ) {
                carousel_container.scrollLeft = Math.trunc(carousel_container_width/100*60)*5+Math.trunc(carousel_container_width/100*40) 
                scrool_value = Math.trunc(carousel_container_width/100*60)*5+Math.trunc(carousel_container_width/100*40) 
            }
            scrool_value -= Math.trunc(carousel_container_width/100*60)            
            for (let i = 0; i < Math.trunc(carousel_container_width/100*60); i++) {
                setTimeout(() => {
                    carousel_container.scrollLeft -= 1                    
                }, 0.5*i);
            }
            break;
        default:
            break;
    }

    update_slide_identification.left()
}
//CAROULSEL ----------------------------------------------------------
//
//
//
//
//
//SITE OBJECTIVE -----------------------------------------------------
function open_purpose_text() {
    page_purpose_text_paragraph.style.display= "flex"
    page_purpose_close_text.style.display= "flex"
    page_purpose_close_text.style.height = page_purpose_text_paragraph.clientHeight+"px"

    setTimeout(function() {
        page_purpose_text_container.style.height=page_purpose_text_paragraph.clientHeight+40+"px"
    }, 1000);

    setTimeout(function() {
        page_purpose_text_paragraph.style.opacity= "1"
        page_purpose_close_text.style.opacity= "1"
    }, 1300);
}

function close_purpose_text() {
    page_purpose_text_paragraph.style.opacity= "0"
    page_purpose_close_text.style.opacity= "0"

    setTimeout(function() {
        page_purpose_text_paragraph.style.display= "none"
        page_purpose_close_text.style.display= "none"
        page_purpose_close_text.style.height = 0+"px"
    }, 1000);

    setTimeout(function() {
        page_purpose_text_container.style.height="0px"
    }, 1300);
}
//SITE OBJECTIVE -----------------------------------------------------
//
//
//
//
//
//DOWNLOAD SECTION --------------------------------------------------
window.addEventListener("scroll", function() {
    setTimeout(function() {
        padlock_beam_right_animation.style.height="85px"
    }, 2000);

    setTimeout(function() {
        unlock_animation.style.opacity="0"
    }, 3000);

    setTimeout(function() {
        unlock_animation.style.display="none"
    }, 4000);

    setTimeout(function() {
        download_link.style.opacity="1"
    }, 4600);
(window.scrollY > 850)})
//DOWNLOAD SECTION---------------------------------------------------
//
//
//
//
//
//LOADING PROJECTS ----------------------------------------------------------
initial_projects = 3

loaded_projects =-1

for (let i = loaded_projects; i < initial_projects; i++) {
    loaded_projects++
    project_container[loaded_projects].style.display = "flex"
}

function loading_projects() {
    if (loaded_projects < project_container.length-1) {
        loaded_projects++
        project_container[loaded_projects].style.display = "flex"
    }
}
//LOADING PROJECTS ----------------------------------------------------------