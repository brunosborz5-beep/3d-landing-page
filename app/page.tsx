export default function Home() {
  return (
    <>
      {/* ===================== MESA + LIVRO (livro fixo, páginas viram) ===================== */}
      <div className="mesa" id="abertura">
        <div className="palco">
          <div className="livro">
            <div className="lombada" aria-hidden="true" />

            <div className="pagina-base" id="pagina-base">
              <div className="pagina-base-conteudo">
                <svg className="flor" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path
                    d="M20 4v32M4 20h32M9 9l22 22M31 9L9 31"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <p>Rio do Sul — SC</p>
              </div>
            </div>

            {/* Fólio I — Onde e quando estamos */}
            <div className="folha" id="folha-onde-quando">
              <p className="folha-numero">Fólio I</p>
              <h2>Onde e quando estamos</h2>
              <p className="folha-lead">
                Um cartório antigo de nome, mas com portas sempre abertas para quem precisa.
              </p>
              <dl className="info-lista">
                <div className="info-item">
                  <dt>Endereço</dt>
                  <dd>
                    Rua Carlos Gomes, nº 105, sala 04, Centro, Rio do Sul/SC — CEP 89160-051
                    <br />
                    <a
                      className="link-mapa"
                      href="https://maps.app.goo.gl/r7Jis6D6onVhjx2U7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no mapa
                    </a>
                  </dd>
                </div>

                <div className="info-item">
                  <dt>Horário de atendimento</dt>
                  <dd>Segunda a sexta-feira, das 9h às 17h, sem fechar ao meio-dia.</dd>
                </div>

                <div className="info-item">
                  <dt>Fechado em feriados nacionais e municipais</dt>
                  <dd>
                    <ul>
                      <li>Ano Novo</li>
                      <li>Carnaval</li>
                      <li>Sexta-feira Santa</li>
                      <li>Aniversário de Rio do Sul (15/04)</li>
                      <li>Tiradentes</li>
                      <li>Dia do Trabalho</li>
                      <li>Corpus Christi</li>
                      <li>Independência</li>
                      <li>Nossa Sra. Aparecida</li>
                      <li>Finados</li>
                      <li>Proclamação da República</li>
                      <li>Consciência Negra</li>
                      <li>Véspera e dia de Natal</li>
                      <li>Véspera de Ano Novo</li>
                    </ul>
                  </dd>
                </div>

                <div className="info-item">
                  <dt>Estacionamento conveniado</dt>
                  <dd>
                    Centro Comercial Bella Park, Calçadão Osny Gonçalves nº 51, Centro (ao lado da
                    academia AD3). Estacione lá e valide o ticket aqui no cartório.
                  </dd>
                </div>
              </dl>
              <p className="folha-pagina-num">— I —</p>
            </div>

            {/* Fólio II — A tabeliã */}
            <div className="folha" id="folha-tabelia">
              <p className="folha-numero">Fólio II</p>
              <h2>A tabeliã</h2>
              <div className="tabelia">
                <div className="tabelia-selo" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path
                      d="M12 28l14-14 4 4-14 14H12v-4Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path d="M24 12l4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="tabelia-texto">
                  <h3>Dra. Yara Costa Torquato</h3>
                  <span className="cargo">Tabeliã Titular</span>
                  <p>
                    Yara é a única tabeliã concursada de Rio do Sul, e conduz este cartório com o
                    rigor que a fé pública exige e o cuidado de quem conhece cada história por
                    trás de cada documento. Sua porta está sempre aberta para orientar, explicar e
                    resolver — com a segurança de quem faz isso todos os dias, há anos, para a
                    nossa cidade.
                  </p>
                </div>
              </div>
              <p className="folha-pagina-num">— II —</p>
            </div>

            {/* Fólio III — Nossa equipe */}
            <div className="folha" id="folha-equipe">
              <p className="folha-numero">Fólio III</p>
              <h2>Nossa equipe</h2>
              <p className="folha-lead">
                Por trás de cada atendimento existe uma equipe dedicada, treinada para lidar com
                atenção e cuidado com cada um dos nossos clientes.
              </p>
              <div className="equipe-destaque">
                <div className="equipe-card">
                  <p className="titulo">Bruno Sborz</p>
                  <p className="funcao">Escrevente Substituto</p>
                </div>
                <div className="equipe-card">
                  <p className="titulo">Jéssica Ramos Dechering</p>
                  <p className="funcao">Escrevente Substituta</p>
                </div>
              </div>
              <p className="equipe-grid-titulo">E também fazem parte do nosso time:</p>
              <ul className="equipe-grid">
                <li>Barbara Scotini Nunes</li>
                <li>Bárbara Luisa Felber Leandro</li>
                <li>Eduardo Alexandre Tillmann</li>
                <li>Isabela Sofia Meneses Pereira</li>
                <li>Joyce Nogueira Dolzan</li>
                <li>Larissa Reblin</li>
                <li>Naiara Marchi</li>
                <li>Ana Julia Gonçalves Hedler</li>
                <li>Bianca Emanuela Sens</li>
              </ul>
              <p className="folha-pagina-num">— III —</p>
            </div>

            {/* Fólio IV — Demais atos que o cartório produz */}
            <div className="folha" id="folha-servicos-simples">
              <p className="folha-numero">Fólio IV</p>
              <h2>Também cuidamos de</h2>
              <p className="folha-lead">
                Sem juridiquês: aqui estão, em bom português, outros atos que resolvemos no dia a
                dia do cartório.
              </p>
              <div className="servicos-grade">
                <div className="servico-card">
                  <h4>Autenticação de documentos</h4>
                  <p>Conferimos se a cópia bate com o original, com nosso carimbo de garantia.</p>
                </div>
                <div className="servico-card">
                  <h4>Procurações públicas</h4>
                  <p>Poderes com fé pública, para alguém agir em seu nome.</p>
                </div>
                <div className="servico-card">
                  <h4>Escrituras públicas</h4>
                  <p>Compra e venda, doação, inventário, testamento, união estável e divórcio.</p>
                </div>
                <div className="servico-card">
                  <h4>Atas notariais</h4>
                  <p>Registramos fatos, conversas e situações com validade jurídica.</p>
                </div>
              </div>
              <p className="folha-pagina-num">— IV —</p>
            </div>

            {/* Cena — Protesto de títulos: carta chegando */}
            <div className="cena-protesto" id="cena-protesto">
              <div className="envelope" aria-hidden="true">
                <div className="envelope-corpo" />
                <div className="envelope-aba" />
                <div className="envelope-lacre" />
              </div>
              <div className="carta-papel">
                <span className="carta-etiqueta">Intimação</span>
                <h3>Protesto de títulos</h3>
                <p>
                  Registramos, consultamos e ajudamos a cancelar dívidas em aberto, com
                  transparência do início ao fim.
                </p>
                <div className="carimbo carimbo--protestado">PROTESTADO</div>
                <div className="risco-carimbo" aria-hidden="true">
                  <svg viewBox="0 0 116 8">
                    <path d="M2 6 L114 2" />
                  </svg>
                </div>
                <div className="carimbo carimbo--regularizado">REGULARIZADO</div>
                <svg className="cadeado" viewBox="0 0 60 70" aria-hidden="true">
                  <rect className="corpo" x="8" y="28" width="44" height="34" rx="4" />
                  <path className="argola" d="M16 28 V18 a14 14 0 0 1 28 0 V28" />
                </svg>
              </div>
            </div>

            {/* Cena — papel voador: Reconhecimento de firma → Apostilamento */}
            <div className="cena-voador" id="cena-voador">
              <div className="papel-voador">
                <div className="conteudo-firma">
                  <h3>Reconhecimento de firma</h3>
                  <p>Certificamos que aquela assinatura é mesmo sua.</p>
                  <div className="doc-linha" />
                  <div className="doc-linha" />
                  <div className="doc-linha curta" />
                  <div className="doc-assinatura-area">
                    <svg className="traco-assinatura" viewBox="0 0 160 30" aria-hidden="true">
                      <path d="M4 22 C16 4 28 26 40 14 S64 2 78 18 S104 6 118 16 S142 8 154 14" />
                    </svg>
                  </div>
                </div>
                <div className="conteudo-apostila">
                  <h3>Apostilamento de Haia</h3>
                  <p>
                    Damos validade internacional a documentos brasileiros, para uso em países que
                    aceitam a Convenção da Apostila.
                  </p>
                </div>
                <div className="selo-brasao" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" />
                    <path
                      d="M50 22c8 3 15 4 22 4v22c0 15-10 26-22 33-12-7-22-18-22-33V26c7 0 14-1 22-4Z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="capa" id="capa">
              <h1 className="capa-titulo-1">3º Tabelionato de Notas e Protesto</h1>
              <p className="capa-titulo-2">Rio do Sul — SC</p>
              <svg className="brasao" viewBox="0 0 100 120" fill="none" aria-hidden="true">
                <path
                  d="M50 6c11 5 22 6 32 6v34c0 24-14 42-32 56C32 88 18 70 18 46V12c10 0 21-1 32-6Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M50 18c8 3 15 4 22 4v26c0 17-10 30-22 39-12-9-22-22-22-39V22c7 0 14-1 22-4Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.7"
                />
                {[
                  [50, 34],
                  [38, 44],
                  [62, 44],
                  [42, 60],
                  [58, 60],
                ].map(([cx, cy], i) => (
                  <path
                    key={i}
                    d="M0 -4 L1.2 -1.2 4 -1.2 1.6 0.6 2.6 4 0 2 -2.6 4 -1.6 0.6 -4 -1.2 -1.2 -1.2 Z"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    transform={`translate(${cx} ${cy})`}
                  />
                ))}
                <path
                  d="M4 26c-6 6-9 15-9 26M96 26c6 6 9 15 9 26"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.8"
                />
                <path
                  d="M6 22c-5 3-7 9-6 16M94 22c5 3 7 9 6 16"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== CONTATO (fluxo normal, após o livro) ===================== */}
      <main className="folios">
        <section className="folio" id="contato" aria-labelledby="contato-titulo">
          <h2 id="contato-titulo">Fale com a gente</h2>
          <p className="folio-lead">
            Dúvidas sobre valores, prazos ou requisitos de um ato específico? Fale com a gente
            pelo WhatsApp ou venha até o cartório.
          </p>
          <div className="contato-bloco">
            <a
              className="whatsapp-botao"
              href="https://wa.me/554735212063"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.3c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-3.2-.7-2.7-1.1-4.4-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.5.3.1.2.1.6-.1 1.2Z" />
              </svg>
              (47) 3521-2063
            </a>
          </div>

          <ul className="links-lista">
            <li>
              <a href="https://www.pesquisaprotesto.com.br/" target="_blank" rel="noopener noreferrer">
                <span className="marca" aria-hidden="true" />
                Pesquisar protesto em todo o Brasil
              </a>
            </li>
            <li>
              <a href="https://selo.tjsc.jus.br/index.html" target="_blank" rel="noopener noreferrer">
                <span className="marca" aria-hidden="true" />
                Verificar a autenticidade de um selo do cartório
              </a>
            </li>
            <li>
              <a
                href="https://www.tjsc.jus.br/web/extrajudicial/normas-e-orientacoes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="marca" aria-hidden="true" />
                Normas do TJSC para cartórios
              </a>
            </li>
            <li>
              <a href="https://atos.cnj.jus.br/atos/detalhar/5243" target="_blank" rel="noopener noreferrer">
                <span className="marca" aria-hidden="true" />
                Norma do CNJ sobre apostilamento
              </a>
            </li>
            <li>
              <a
                href="https://www.tjsc.jus.br/web/corregedoria-geral-da-justica/normas-e-orientacoes/emolumentos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="marca" aria-hidden="true" />
                Tabela de emolumentos
              </a>
            </li>
          </ul>
        </section>

        <p className="fim">Fim</p>
      </main>

      {/* ===================== AURORA ===================== */}
      <a
        className="aurora"
        href="https://wa.me/554735212063"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Aurora pelo WhatsApp"
      >
        <span className="aurora-balao">Posso ajudar?</span>
        <svg className="aurora-avatar" viewBox="0 0 60 60" aria-hidden="true">
          <circle cx="30" cy="22" r="10" fill="currentColor" opacity="0.85" />
          <path d="M12 52c1-11 8-17 18-17s17 6 18 17" fill="currentColor" opacity="0.85" />
        </svg>
      </a>

      <script src="/tabelionato.js" defer />
    </>
  )
}
