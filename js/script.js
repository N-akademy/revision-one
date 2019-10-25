
let click = document.querySelector(".clickandChange");

click.addEventListener("mouseover",function(){
    document.querySelector("body").classList.add("modified-body")
})

click.addEventListener("mouseout",function(){
    document.querySelector("body").classList.remove("modified-body")
})






