const solutions = [
  {
    numero: '01',
    titulo: 'Captura Inteligente',
    texto: 'IA melhora automaticamente a iluminação, nitidez e legibilidade das imagens.'
  },
  {
    numero: '02',
    titulo: 'Foto para Texto',
    texto: 'Transforma textos presentes nas imagens em texto editável.'
  },
  {
    numero: '03',
    titulo: 'Organização Inteligente',
    texto: 'Organiza automaticamente as fotos por matéria e data.'
  },
  {
    numero: '04',
    titulo: 'Filtros e Personalização',
    texto: 'Permite ajustar e personalizar as fotos de acordo com o estilo do usuário.'
  },
  {
    numero: '05',
    titulo: 'Limpeza Automática',
    texto: 'Remove sombras, sujeiras e outras imperfeições das imagens.'
  },
  {
    numero: '06',
    titulo: 'Filtros Divertidos',
    texto: 'Oferece filtros diretamente na câmera para tornar a experiência mais divertida.'
  }
]

function Solutions({
  filtroSelecionado,
  selecionarFiltro,
  numeroFuncionalidade
}) {

  return (
    <section id="solucao">

      <div className="container">

        <div className="section-head reveal">

          <span className="eyebrow">
            A solução
          </span>

          <h2 className="section-title">
            Conheça o OPT Cam
          </h2>

          <p className="section-text">
            O OPT Cam reúne inteligência, praticidade e diversão
            em uma única experiência de câmera.
          </p>

        </div>

        <div className="grid-solutions">

          {solutions.map((solution, index) => (

            <article
              key={index}
              className={
                index === 0
                  ? 'card-solution card-solution--lead viewfinder reveal'
                  : 'card-solution viewfinder reveal'
              }
            >

              <span className="card-number">
                {solution.numero}
              </span>

              <div className="card-icon">
                {index + 1}
              </div>

              <h3>
                {solution.titulo}
              </h3>

              <p>
                {solution.texto}
              </p>

              {solution.titulo === 'Filtros Divertidos' && (

                <button
                  className="btn btn-ghost"
                  onClick={() =>
                    selecionarFiltro('Filtro divertido')
                  }
                >
                  Selecionar filtro
                </button>

              )}

            </article>

          ))}

        </div>

        <div className="react-demo">

          <h3>
            Interação do OPT Cam
          </h3>

          <p>
            Filtro selecionado:
            <strong> {filtroSelecionado}</strong>
          </p>

          <p>
            Funcionalidade recomendada:
            <strong> #{numeroFuncionalidade}</strong>
          </p>

        </div>

      </div>

    </section>
  )
}

export default Solutions