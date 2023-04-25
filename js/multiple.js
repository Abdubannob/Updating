
let multiple = document.querySelector(".multiple")
let selection = document.querySelector(".languages")
// let searchItem = document.querySelector(".checking")

let searchItem = document.getElementById("sel")
selection.onclick = function (){
    
    multiple.classList.toggle("actived");
    selection.classList.toggle("actived");


}

searchItem.onclick = function (){
    
    multiple.classList.toggle("actived");
    selection.classList.toggle("actived");


}

document.onclick = function(e){
    if(!multiple.contains(e.target) && !selection.contains(e.target)){
        multiple.classList.remove("actived");
        selection.classList.remove("actived");
    }
}