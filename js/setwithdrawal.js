let radio1 = document.getElementById("radio1")
let sign = document.getElementById("sign-in")
let signTwo = document.getElementById("sign-in-two")
let signThree = document.getElementById("sign-in-three")
document.getElementById("radio1").onclick =() => {
    sign.style.display="flex"
    signTwo.style.display = "none"
    signThree.style.display = "none"
}

document.getElementById("radio2").onclick =() => {
    sign.style.display="none"
    signTwo.style.display = "flex"
    signThree.style.display = "none"
}
document.getElementById("radio3").onclick =() => {
    sign.style.display="none"
    signTwo.style.display = "none"
    signThree.style.display = "flex"
}