// Abertura da janela ao clicar no button

const openModalButton =  document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');

openModalButton.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

// Fechamento da janela ao clicar no ESC ( o esc vai estar na minha tela inteira

document.addEventListener('keydown', function(event) { // event pois preciso saber se a tecla digitada foi a esc
    //console.log(event) //para ver o nome da tecla esc code e key*
    const isEscKey = event.key === 'Escape' //esc , o evento key é escape?


    if(isEscKey) {
        modalWrapper.classList.add('invisible') // qualquer outra tecla ele n vai funcionar,
        //mas clicando na key esc, ele vai entrar nessa condicao e vai add a classe invisible.
    }
    })








