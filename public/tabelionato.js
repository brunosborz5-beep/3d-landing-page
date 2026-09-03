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
  var regua = document.getElementById('regua')

  /* Cada cena recebe uma fatia da altura de .mesa (em vh). A soma + a folga
     de 100vh precisa bater com a altura de .mesa no CSS (1140vh). */
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

  /* Curva suave (smoothstep): a virada acelera e desacelera, em vez de
     girar em velocidade constante — fica mais parecida com o gesto de
     virar uma página de verdade. Também começa mais cedo, então a
     virada em si dura mais e não parece um "tranco". */
  var INICIO_VIRADA = 0.45

  function progressoVirada(local) {
    if (local < INICIO_VIRADA) return 0
    var t = clamp01((local - INICIO_VIRADA) / (1 - INICIO_VIRADA))
    return t * t * (3 - 2 * t)
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

  /* Deslocamento acumulado (em px, no viewport atual) de cada cena —
     usado tanto pelo motor de rolagem quanto pelos links da régua. */
  function offsetsDasCenas() {
    var vh = window.innerHeight
    var offsets = {}
    var acumulado = 0
    for (var i = 0; i < CENAS.length; i++) {
      var alturaPx = (CENAS[i].vh / 100) * vh
      offsets[CENAS[i].id] = { inicio: acumulado, altura: alturaPx }
      acumulado += alturaPx
    }
    return offsets
  }

  /* Cenas com fade de entrada (protesto, voador) precisam de uma folga
     ao pousar por clique na régua — senão a pessoa cai bem no início,
     antes do fade terminar, e vê tudo semitransparente. */
  var FOLGA_POUSO = { protesto: 0.12, voador: 0.13 }

  var cenaAtiva = null

  function marcarAtiva(id) {
    if (id === cenaAtiva || !regua) return
    cenaAtiva = id
    var links = regua.querySelectorAll('a')
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('ativo', links[i].getAttribute('data-cena') === id)
    }
  }

  var ticking = false

  function atualizar() {
    var vh = window.innerHeight
    var rect = mesa.getBoundingClientRect()
    var rolado = -rect.top

    var offset = 0
    var idAtual = 'abertura'
    for (var i = 0; i < CENAS.length; i++) {
      var cena = CENAS[i]
      var alturaPx = (cena.vh / 100) * vh
      var local = clamp01((rolado - offset) / alturaPx)

      if (rolado >= offset) idAtual = cena.id

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

    marcarAtiva(rolado >= offset - vh * 0.02 ? 'contato' : idAtual)

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

  /* Régua: cada link rola até o início da cena correspondente. */
  if (regua) {
    regua.addEventListener('click', function (event) {
      var link = event.target.closest('a[data-cena]')
      if (!link) return
      event.preventDefault()
      var id = link.getAttribute('data-cena')

      if (id === 'contato') {
        var contato = document.getElementById('contato')
        if (contato) contato.scrollIntoView({ behavior: 'smooth' })
        return
      }

      var offsets = offsetsDasCenas()
      if (Object.prototype.hasOwnProperty.call(offsets, id)) {
        var folga = (FOLGA_POUSO[id] || 0) * offsets[id].altura
        window.scrollTo({ top: offsets[id].inicio + folga + 2, left: 0, behavior: 'smooth' })
      }
    })
  }
})()
