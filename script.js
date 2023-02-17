var work = document.getElementById("work")

var h6d = document.createElement("h6")
var h4d = document.createElement("h4")
var h6t = document.createTextNode("Full stack Web Developer")
h6d.appendChild(h6t)
var h4t = document.createTextNode("Google")
h4d.appendChild(h4t)

h6d.style.transform = "translate(37px , 2px)"
h4d.style.transform = "translate(90px)"

window.addEventListener("resize" , function() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        work.innerHTML = "Full stack Web Developer at Google"
    } else if (window.matchMedia("(max-width: 700px)").matches) {
        work.innerHTML = " "
        work.appendChild(h6d)
        work.appendChild(h4d)
    }
})