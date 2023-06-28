/*Precargador de la página
window.onload = function(){
    $('#onldr').fadeOut();
    $('body').removeClass('hidden');
}
//Ventana emergente email
var btnOpenPopUp = document.getElementById("btn-open-popup"), //id="btn-open-popup" -> html
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
});*/
function sendMail()
{
    var body = document.getElementById("message").value;
    window.location.href = "mailto:paulromero800@gmail.com?Subject=Portfolio Mail-Box&body="+body;
}