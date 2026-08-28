function Header() {
  return (
    <header className="site-header">

      <div className="container nav-bar">

        <a href="#abertura" className="brand">
          <span className="brand-mark"></span>
          OPT Cam
        </a>

        <input
          type="checkbox"
          id="navToggle"
          className="nav-toggle-input"
        />

        <nav aria-label="Navegação principal">

          <ul className="nav-links">

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

        </nav>

        <label
          htmlFor="navToggle"
          className="nav-toggle"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

      </div>

    </header>
  )
}

export default Header
