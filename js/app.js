
let screen = document.querySelector(".screen")
let noti = document.getElementById("item-notificate")
let body = document.getElementById('body')
let gradi = document.querySelector(".linear-gradient")
document.getElementById("notification-cancel").onclick = () => {
    noti.style.display = "none"
    gradi.style.display ="none"
}

document.getElementById("notification").onclick =()=>{
    screen.style.display = "inline-block"
    noti.style.display = "flex"
    gradi.style.display ="inline-block"

}

document.getElementById("screen").onclick =()=>{
    screen.style.display = "none"
}

document.getElementById("input-item").onclick = () => {
   
    document.getElementById("input-item").style.outlineColor ="1px solid var(--secondary)"
}