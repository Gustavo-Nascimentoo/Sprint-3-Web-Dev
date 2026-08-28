import imagemHero from '../assets/imagem1.jpg'

function Hero() {

  const titulo =
    'OPT Cam — uma câmera mais inteligente para o seu dia a dia'

  const subtitulo =
    'Uma experiência de câmera que usa inteligência artificial para melhorar, organizar e personalizar suas fotos.'

  const texto =
    'Desenvolvido para jovens e estudantes que vivem pelo smartphone e precisam de mais praticidade em cada clique.'

  return (
    <section id="abertura" className="hero">

      <div className="container grid-hero">

        <div className="hero-content">

          <h1 className="hero-title">
            {titulo}
          </h1>

          <p className="hero-lead">
            {subtitulo}
          </p>

          <p className="hero-sub">
            {texto}
          </p>

          <div className="hero-actions">

            <a
              href="#solucao"
              className="btn btn-primary"
            >
              Conheça o OPT Cam
            </a>

            <a
              href="#problema"
              className="btn btn-ghost"
            >
              Entenda o problema
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>6</strong>
              <span>Funcionalidades inteligentes</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Câmera, diversas soluções</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Pensado para estudantes</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <img
            src={imagemHero}
            alt="Demonstração do OPT Cam"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero