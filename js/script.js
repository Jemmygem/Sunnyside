const navbtn = document.querySelector("#navbtn")
const navbar = document.querySelector("#navbar");

navbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (navbar.classList.contains("hidden")){
        navbar.classList.remove("hidden")
    }else{
        navbar.classList.add("hidden")
    }
})