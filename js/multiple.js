
let multiple = document.querySelector(".multiple")
let selection = document.querySelector(".languages")

selection.onclick = function (){
    multiple.classList.toggle("actived");
    selection.classList.toggle("actived");


}

document.onclick = function(e){
    if(!multiple.contains(e.target) && !selection.contains(e.target)){
        multiple.classList.remove("actived");
        selection.classList.remove("actived");
    }
}