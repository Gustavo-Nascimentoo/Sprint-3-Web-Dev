const audiences = [
  {
    titulo: 'Estudantes',
    texto: 'Para fotografar conteúdos, transformar textos e organizar materiais.'
  },
  {
    titulo: 'Jovens',
    texto: 'Para registrar momentos, editar fotos e se divertir com filtros.'
  },
  {
    titulo: 'Criadores de Conteúdo',
    texto: 'Para personalizar imagens de forma rápida e prática.'
  }
]

function Audience() {

  return (
    <section id="publico-alvo">

      <div className="container">

        <div className="section-head center reveal">

          <span className="eyebrow">
            Para quem é
          </span>

          <h2 className="section-title">
            Feito para quem vive pelo smartphone.
          </h2>

        </div>

        <div className="grid-audience">

          {audiences.map((audience, index) => (

            <article
              className="card-audience reveal"
              key={index}
            >

              <div className="card-icon">
                {index + 1}
              </div>

              <h3>
                {audience.titulo}
              </h3>

              <p>
                {audience.texto}
              </p>

            </article>

          ))}

        </div>

        <p className="audience-closing reveal">
          "Uma câmera que acompanha diferentes momentos da rotina."
        </p>

      </div>

    </section>
  )
}

export default Audience