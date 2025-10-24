


document.querySelector("#mobileHamburgerBtn").addEventListener("click", function () {
    document.querySelector("#mobileMenu").style.display = "flex";
    document.querySelector("#hamburgerMenu").style.display = "none";
});




document.querySelector("#mobileCancelBtn").addEventListener("click", function () {
    document.querySelector("#mobileMenu").style.display = "";
    document.querySelector("#hamburgerMenu").style.display = "flex";
});