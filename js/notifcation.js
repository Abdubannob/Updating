
let notif = document.getElementById("notifcation")
let note = document.getElementById("notifcation-cancel")
let body = document.querySelector("body")

notif.onclick = function () {
    body.classList.add("screen-gradient")
}

note.onclick = function () {
    body.classList.remove("screen-gradient")
}




// document.onclick = function(e){
//     if(!notif.contains(e.target) ){
//         body.classList.remove("screen-gradient");
//     }
// }

