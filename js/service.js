let requestPortal = document.getElementById("RequestPortal")
let ServiceReq = document.querySelector(".ServicePortal")
let carousel = document.getElementById("grid-items")
let req = document.getElementById("requestService")
let check = document.getElementById("check")
let reqser = document.querySelector(".request-service")

document.getElementById("check").onclick =()=>{

    if(check.checked){
        requestPortal.style.display = "none"
        carousel.style.display = "grid"
        reqser.textContent = "Service Request"
    }
    else{
        requestPortal.style.display = "inline-block"
        carousel.style.display= "none"
        reqser.textContent = "Request portal"
    }
}