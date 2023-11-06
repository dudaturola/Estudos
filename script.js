function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        document.body.style.background = '#f8dcd6'
        img.src = 'fotomanha.png'
        }   else if (hora>= 12 && hora < 18) {
            //BOA TARDE!
            document.body.style.background = '#9daabc'
            img.src = 'fototarde.png'
        }   else  {
            //BOA NOITE!
            document.body.style.background = '#1c3c66'
            img.src = 'fotonoite.png'
        }
    
}