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