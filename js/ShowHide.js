
let cancel = document.querySelector(".three-dots")
let edit = document.querySelector(".three-dots-item")

cancel.onclick = function (){
    cancel.classList.toggle("actives");
    edit.classList.toggle("actives");
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





