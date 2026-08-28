const problems = [
  {
    titulo: 'Iluminação e nitidez',
    texto: 'Fotos com pouca nitidez ou iluminação ruim, difíceis de corrigir manualmente.'
  },
  {
    titulo: 'Textos presos na imagem',
    texto: 'Textos fotografados difíceis de reutilizar, exigindo digitação manual.'
  },
  {
    titulo: 'Estudos desorganizados',
    texto: 'Fotos de estudos desorganizadas, misturadas com o restante da galeria.'
  },
  {
    titulo: 'Sombras e imperfeições',
    texto: 'Sombras, sujeiras e imperfeições que prejudicam a qualidade das imagens.'
  },
  {
    titulo: 'Falta de personalização',
    texto: 'Poucas opções de personalização para deixar as fotos com a cara do usuário.'
  },
  {
    titulo: 'Depender de outros apps',
    texto: 'Necessidade de baixar outros aplicativos para usar filtros e efeitos.'
  }
]

function Problems() {

  return (
    <section id="problema">

      <div className="container">

        <div className="section-head reveal">

          <span className="eyebrow">
            O desafio
          </span>

          <h2 className="section-title">
            A câmera pode fazer mais.
          </h2>

          <p className="section-text">
            Jovens usam a câmera todos os dias, mas ainda enfrentam
            dificuldades para conseguir boas fotos, organizar conteúdos
            e realizar tarefas que acabam exigindo outros aplicativos.
          </p>

        </div>

        <div className="grid-problems">

          {problems.map((problem, index) => (

            <article
              className="card-problem reveal"
              key={index}
            >

              <div className="card-icon">
                {index + 1}
              </div>

              <h3>
                {problem.titulo}
              </h3>

              <p>
                {problem.texto}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Problems