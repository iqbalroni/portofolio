var menu = document.getElementById('menu');
var tombol = document.getElementById('set');
var back = document.getElementById('kembali');
var isi = document.getElementById('set-nav');

tombol.onclick = function(){
    menu.style.right=  "20px";
    tombol.style.display="none";
    back.style.display="flex";
    back.style.opacity="1";
    isi.style.display="flex";
}

back.onclick = function(){
    menu.style.right=  "10px";
    tombol.style.display="flex";
    back.style.display="none";
    back.style.opacity="0";
    isi.style.display="none";
}


// menu navbar

var open = document.getElementById('open-button');
var close = document.getElementById('close-navbar');
var pad = document.getElementById('pad');
var navbar = document.getElementById('menuhidden');

close.onclick = function(){
    pad.style.padding = 0;
    navbar.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
}

open.onclick = function(){
    pad.style.paddingTop = "30px";
    navbar.style.display = "flex";
    close.style.display = "block";
    open.style.display = "none";
}