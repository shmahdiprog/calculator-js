let show = document.getElementById("show")
let one = document.getElementById("num1")
let two = document.getElementById("num2")
let three = document.getElementById("num3")
let four = document.getElementById("num4")
let five = document.getElementById("num5")
let six = document.getElementById("num6")
let seven = document.getElementById("num7")
let eight = document.getElementById("num8")
let nine = document.getElementById("num9")
let zero = document.getElementById("num0")
let momayyez = document.getElementById("momayyez")
let equal = document.getElementById("equal")
let taghsim = document.getElementById("taghsim")
let zarb = document.getElementById("zarb")
let mines = document.getElementById("mines")
let plus = document.getElementById("plus")
let c = document.getElementById("firstState")
let page = document.getElementById("container")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

function todo(number1, number2, sym) {
    if (sym == "+"){show.innerHTML = number1 + number2}
    else if (sym == "-"){show.innerHTML = number1 - number2}
    else if (sym == "*"){show.innerHTML = number1 * number2}
    else if (sym == "/"){show.innerHTML = number1 / number2}    
}

let proces = ""
let num1 = 0
let num2 = 0
let work;

if (localStorage.getItem('notFirstTime') != 0) {
    localStorage.setItem('notFirstTime', 1);
}

if (localStorage.getItem('notFirstTime') == 0) {
    h1.innerHTML = ""
    h2.innerHTML = ""
    page.style.position = "unset"
    page.style.top = "unset"
}

page.onclick = function(event) {
    if (proces == "") {
        h1.innerHTML = ""
        h2.innerHTML = ""
        page.style.position = "unset"
        page.style.top = "unset"
        localStorage.setItem('notFirstTime', 0);
    }
    if (event.target.innerHTML.length == 1 && event.target.innerHTML != "C" && event.target.innerHTML != "="){
        show.innerHTML += event.target.innerHTML
    }
    if (event.target.className == "number") {
        proces += event.target.innerHTML
    }
    if (event.target.className == "symbol") {
        if (num1 == 0) {
            num1 = parseFloat(proces)
            work = event.target.innerHTML
            proces = ""
        }
    if (event.target.id == "equal"){num2 = parseFloat(proces)}
    }
    
}
equal.addEventListener("click", function() {
    num2 = parseFloat(proces)
    todo(num1, num2, work)
})

c.onclick = function() {
    show.innerHTML = ""
    proces = ""
    num1 = 0
    num2 = 0
}