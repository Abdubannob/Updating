
let cancel = document.querySelector(".three-dots")
let edit = document.querySelector(".three-dots-item")
let notif = document.getElementById("notifcation")
let body = document.querySelector("body")
cancel.onclick = function (){
    cancel.classList.toggle("actives");
    edit.classList.toggle("actives");
}

notif.onclick = function () {
    body.addClass("screen-gradient")
    body.style.backgroundColor = "green"
}

document.onclick = function(e){
    if(!cancel.contains(e.target) && !edit.contains(e.target)){
        cancel.classList.remove("actives");
        edit.classList.remove("actives");
    }

    if(!notif.contains(e.target)){
        body.classList.remove("screen-gradient");
    }
}





