function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    var genero = ''
    if (fsex[0].checked) {
       genero = 'Homem'
       document.body.style.background = 'rgb(0, 119, 255)'
       if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/bebeh.png')
       }
       else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovemh.png')
       }
       else if (idade < 50) {
            img.setAttribute('src', 'imagens/adultoh.png')
       }
       else {
            img.setAttribute('src', 'imagens/idosoh.png')
       }
    }
    else if (fsex[1].checked) {
        genero = 'Mulher'
        document.body.style.background = 'pink'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/bebem.png')
        }
        else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovemm.png')
        }
        else if (idade < 50) {
            img.setAttribute('src', 'imagens/adultom.png')
        }
        else {
            img.setAttribute('src', 'imagens/idosom.png')
        }
    }
    else {
        genero = 'Gênero não especificado'
    }
    res.innerHTML = `${genero} com ${idade} anos de idade.`
    res.appendChild(img)
}