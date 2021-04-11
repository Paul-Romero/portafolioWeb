//Precargador de la página
window.onload = function(){
    $('#onldr').fadeOut();
    $('body').removeClass('hidden');
}
//Ventana emergente email
var btnOpenPopUp = document.getElementById("btn-open-popup"),
    overlay = document.getElementById("overlay"),
    popUp = document.getElementById("popup"),
    btnClosePopUp = document.getElementById("btn-close-popup");
btnOpenPopUp.addEventListener('click', function() {
    overlay.classList.add('active');
    popUp.classList.add('active');
});
btnClosePopUp.addEventListener('click', function() {
    overlay.classList.remove('active');
    popUp.classList.remove('active');
});