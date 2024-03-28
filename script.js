function carregar() {
  var mensagem = window.document.querySelector('div#mensagem')
  var imagem = window.document.querySelector('img#imagem')
  var data = new Date()
  var hora = data.getHours()
  mensagem.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    imagem.src="imagens/manha.png"
    document.body.style.background = '#f4e2ca'
  } else if (hora >= 12 && hora < 18) {
    imagem.src="imagens/tarde.png"
    document.body.style.background = '#a1b6c7'
  } else {
    imagem.src="imagens/noite.png"
    document.body.style.background = '#2c3838'

  }
}
