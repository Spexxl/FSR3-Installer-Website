const faqs = document.querySelectorAll(".faq-area");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("Menu-Mobile")
let overlay =document.getElementById("overlay-menu")

btnMenu.addEventListener("click", () => {
    menu.classList.add("open-menu")
})

menu.addEventListener("click", () => {
    menu.classList.remove("open-menu")
})

overlay.addEventListener("click", () => {
    menu.classList.remove("open-menu")
})


