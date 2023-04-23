let bodies = document.querySelector("contain")
let count = ""
document.querySelector(".three-dots").onclick = () => {
    document.querySelector(".three-dots-item").style.display = "flex"
    count += 1
    // console.log(arr.length)
    if(count.length > 1){
    document.querySelector(".three-dots-item").style.display = "none"
        count = ""
    }

}
console.log(count)


// let dots = document.querySelector(".three-dots")
// function show (){
//     arr.push('show')
//     document.querySelector(".three-dots-item").style.display = "flex"
//     if(arr.length === 1){
//         document.querySelector(".three-dots-item").style.display = "none"
//     }
//     console.log(arr.length)
//     arr = []
// }

// dots.onclick = show

function hide () {
    if(count.length > 0){
        document.querySelector(".three-dots-item").style.display = "none"
    }

    show()
}

bodies.onclick = hide