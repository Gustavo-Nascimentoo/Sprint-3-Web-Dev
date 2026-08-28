function Footer() {

  return (
    <footer className="site-footer">

      <div className="container grid-footer">

        <div className="footer-brand">

          <a href="#abertura" className="brand">
            <span className="brand-mark"></span>
            OPT Cam — JOVI Smartphone
          </a>

          <p>
            Uma câmera mais inteligente,
            prática e divertida.
          </p>

        </div>

        <div className="footer-col">

          <h4>Navegação</h4>

          <ul>

            <li>
              <a href="#abertura">Início</a>
            </li>

            <li>
              <a href="#problema">Problema</a>
            </li>

            <li>
              <a href="#solucao">Solução</a>
            </li>

            <li>
              <a href="#publico-alvo">Público-Alvo</a>
            </li>

          </ul>

        </div>

        <div className="footer-col">

          <h4>Projeto</h4>

          <ul>

            <li>
              <a href="#galeria">Galeria</a>
            </li>

            <li>
              <a href="#equipe">Nossa Equipe</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>

          </ul>

        </div>

      </div>

      <div className="container">

        <hr className="footer-divider" />

        <div className="grid-footer-bottom">

          <span>
            © 2026 OPT Cam — FIAP
          </span>

          <div className="footer-legal-links">

            <a href="#abertura">Início</a>
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#contato">Contato</a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer