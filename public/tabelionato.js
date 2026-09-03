(function () {
  'use strict'

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* Abertura do livro: rotaciona a capa conforme o progresso do scroll */
  var abertura = document.getElementById('abertura')
  var capa = document.getElementById('capa')

  if (abertura && capa && !reduzMovimento) {
    var ticking = false

    var atualizar = function () {
      var retangulo = abertura.getBoundingClientRect()
      var total = abertura.offsetHeight - window.innerHeight
      var rolado = -retangulo.top
      var progresso = total > 0 ? rolado / total : 0
      if (progresso < 0) progresso = 0
      if (progresso > 1) progresso = 1
      capa.style.setProperty('--rotate', progresso * -160 + 'deg')
      ticking = false
    }

    var aoRolar = function () {
      if (!ticking) {
        window.requestAnimationFrame(atualizar)
        ticking = true
      }
    }

    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    atualizar()
  }

  /* Cenas animadas de serviços: disparam quando entram na tela */
  var cenas = document.querySelectorAll('.cena')

  if ('IntersectionObserver' in window && cenas.length) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          var elemento = entrada.target
          var tipo = elemento.getAttribute('data-anim')

          if (entrada.isIntersecting) {
            elemento.classList.add('ativo')
            if (tipo === 'once') {
              observador.unobserve(elemento)
            }
          } else if (tipo === 'loop') {
            elemento.classList.remove('ativo')
          }
        })
      },
      { threshold: 0.4 }
    )

    cenas.forEach(function (cena) {
      observador.observe(cena)
    })
  } else {
    cenas.forEach(function (cena) {
      cena.classList.add('ativo')
    })
  }
})()
