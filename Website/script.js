let loader = document.querySelector("#preloader");

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 500); 
});
