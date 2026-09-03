(function () {
  'use strict'

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  var mesa = document.getElementById('abertura')
  if (!mesa) return

  if (reduzMovimento) {
    return
  }

  var capa = document.getElementById('capa')
  var paginaBase = document.getElementById('pagina-base')
  var folhas = {
    'onde-quando': document.getElementById('folha-onde-quando'),
    tabelia: document.getElementById('folha-tabelia'),
    equipe: document.getElementById('folha-equipe'),
    'servicos-simples': document.getElementById('folha-servicos-simples'),
  }
  var cenaProtesto = document.getElementById('cena-protesto')
  var cenaVoador = document.getElementById('cena-voador')

  /* Cada cena recebe uma fatia da altura de .mesa (em vh). A soma precisa
     bater com a altura de .mesa no CSS (1040vh). */
  var CENAS = [
    { id: 'abertura', vh: 230 },
    { id: 'onde-quando', vh: 110 },
    { id: 'tabelia', vh: 100 },
    { id: 'equipe', vh: 100 },
    { id: 'servicos-simples', vh: 100 },
    { id: 'protesto', vh: 170 },
    { id: 'voador', vh: 230 },
  ]

  function clamp01(v) {
    return v < 0 ? 0 : v > 1 ? 1 : v
  }

  /* A folha fica parada e legível durante a maior parte da sua faixa de
     rolagem; a virada em si acontece rápido, só no fim. */
  var INICIO_VIRADA = 0.7

  function progressoVirada(local) {
    if (local < INICIO_VIRADA) return 0
    return (local - INICIO_VIRADA) / (1 - INICIO_VIRADA)
  }

  function aplicarProtesto(p) {
    if (!cenaProtesto) return
    var entrada = clamp01(p / 0.08)
    var saida = p > 0.94 ? clamp01((p - 0.94) / 0.06) : 0
    cenaProtesto.style.setProperty('--op', String(entrada * (1 - saida)))
    cenaProtesto.style.setProperty('--slide', String(clamp01((p - 0.06) / 0.5)))
    cenaProtesto.classList.toggle('fase-protestado', p > 0.6)
    cenaProtesto.classList.toggle('fase-cadeado', p > 0.74)
    cenaProtesto.classList.toggle('fase-regularizado', p > 0.88)
  }

  function aplicarVoador(p) {
    if (!cenaVoador) return
    var op = p > 0 ? 1 : 0
    cenaVoador.style.setProperty('--op', String(op))
    cenaVoador.style.setProperty('--entrada', String(clamp01(p / 0.1)))
    cenaVoador.style.setProperty('--voo', String(clamp01((p - 0.85) / 0.15)))
    cenaVoador.classList.toggle('fase-selo', p > 0.35)
    cenaVoador.classList.toggle('fase-apostila', p > 0.58)
  }

  var ticking = false

  function atualizar() {
    var vh = window.innerHeight
    var rect = mesa.getBoundingClientRect()
    var rolado = -rect.top

    var offset = 0
    for (var i = 0; i < CENAS.length; i++) {
      var cena = CENAS[i]
      var alturaPx = (cena.vh / 100) * vh
      var local = clamp01((rolado - offset) / alturaPx)

      if (cena.id === 'abertura' && capa) {
        capa.style.setProperty('--rotate', local * -160 + 'deg')
      } else if (folhas[cena.id]) {
        folhas[cena.id].style.setProperty('--rotate', progressoVirada(local) * -170 + 'deg')
        if (cena.id === 'onde-quando' && paginaBase) {
          paginaBase.style.setProperty('--pb-op', String(1 - clamp01(local / 0.05)))
        }
      } else if (cena.id === 'protesto') {
        aplicarProtesto(local)
      } else if (cena.id === 'voador') {
        aplicarVoador(local)
      }

      offset += alturaPx
    }

    ticking = false
  }

  function aoRolar() {
    if (!ticking) {
      window.requestAnimationFrame(atualizar)
      ticking = true
    }
  }

  window.addEventListener('scroll', aoRolar, { passive: true })
  window.addEventListener('resize', aoRolar)
  atualizar()
})()
