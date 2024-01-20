window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let cabecalho = document.getElementById('cabecalho');
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        cabecalho.style.position = 'fixed';
        cabecalho.style.top = '0';
    } else {
        cabecalho.style.position = 'static';
    }
}

function toggleMenu (){
    let menu = document.getElementById('menu');
    menu.classList.toggle('show-menu')
}
