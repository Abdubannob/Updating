
let multiple = document.querySelector(".multiple")
let selection = document.querySelector(".languages")
let select = document.querySelector("selection-wrapper")
let selectItems = document.querySelector("#select-one")

let searchItem = document.getElementById("sel")
selection.onclick = function (){
    
    multiple.classList.toggle("actived");
    selection.classList.toggle("actived");


}

selectItems.onclick = function (){
    
    selectItems.classList.toggle("activetion");
   
}


searchItem.onclick = function (){
    
    multiple.classList.toggle("actived");
    select.classList.toggle("actived");


}

document.onclick = function(e){
    if(!multiple.contains(e.target) && !selection.contains(e.target)){
        multiple.classList.remove("actived");
        selection.classList.remove("actived");
    }

    if(!searchItem.contains(e.target) && !select.contains(e.target)){
        selectItems.classList.remove('activetion')
    }
    
}
