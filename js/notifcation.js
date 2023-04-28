let notif = document.getElementById("notifcation")
let body = document.querySelector("body")
let bodies = document.querySelector(".note-contents")


bodies.onclick = function () {
    body.classList.add("screen-gradient")
}


notif.onclick = function () {
    body.classList.add("screen-gradient")
}

document.onclick = function(e){


    if(!notif.contains(e.target) ){
        body.classList.remove("screen-gradient");
    }
}
