let multiple = document.querySelector(".multiple")
let selection = document.querySelector(".languages")
let languagebtn = document.querySelector(".language-btn")
let notif = document.getElementById("notifcation")
let note = document.getElementById("notifcation-cancel")
let notes = document.getElementById("notifcation-cancel-nav")
let bod = document.querySelector(".notifcation-message")
let notebody = document.querySelector(".note-contents")

languagebtn.onclick = function (){  
    selection.classList.toggle("category-actived");
    
}

multiple.onclick = function (){  
    multiple.classList.add("actived");
    
}

notebody.onclick = function (){
    bod.classList.add("screen-gradient-two")
}

notif.onclick = function () {
    bod.classList.add("screen-gradient")
}

note.onclick = function () {
    bod.classList.remove("screen-gradient")
}


document.onclick = function(e){

    if( !selection.contains(e.target) ){
        selection.classList.remove("category-actived");
    }

    if(!notif.contains(e.target) ){
        bod.classList.remove("screen-gradient");
    }
    if(!notebody.contains(e.target)){
        bod.classList.remove("screen-gradient-two");
    }
}

