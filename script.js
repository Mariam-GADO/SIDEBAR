let myspan = document.querySelector(".icone")
let myliens = document.querySelector(".liens")

myspan.addEventListener("click", (e) => {
    myspan.classList.toggle("iconehover")
    myliens.classList.toggle("linshover")
})