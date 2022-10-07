function changesize() {
    if (window.innerWidth <= 500) {
        ul.style.display = 'none'
    } else {
        ul.style.display = 'flex'
    }
}

var ul = document.getElementById('mobile-ul')

function clickmenu(){
    if (ul.style.display == 'flex') {
        ul.style.display = 'none'
    } else{
        ul.style.display = 'flex'
    }
}

var nome = document.getElementById('nome')
var email = document.getElementById('email')
var desc = document.getElementById('desc')


function clickSubmit(){
    alert('Mensagem enviada com sucesso')
    nome.innerHTML = ''
    email.innerHTML = ''
    desc.innerHTML = ''
}