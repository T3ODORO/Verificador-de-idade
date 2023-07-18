function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('birth')
    var res = document.getElementById('res')
    
    if (Number(fano.value) > ano) {
        alert('ERRO')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'ft\criançahomem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ft\jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'ft\adultohomem.png')
            } else {
                img.setAttribute('src', 'ft\idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'ft\criançamulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ft\jovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'ft\adultamulher.png')
            } else {
                img.setAttribute('src', 'ft\idosamulher.png')
            }
        }

        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}