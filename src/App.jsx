import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import Audience from './components/Audience'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [filtroSelecionado, setFiltroSelecionado] = useState(
    localStorage.getItem('filtroSelecionado') || 'Nenhum'
  )

  const numeroFuncionalidade = Math.floor(Math.random() * 6) + 1

  function selecionarFiltro(filtro) {
    setFiltroSelecionado(filtro)
    localStorage.setItem('filtroSelecionado', filtro)
  }

  return (
    <div className="app">

      <Header />

      <main id="conteudo">

        <Hero />

        <Problems />

        <Solutions
          filtroSelecionado={filtroSelecionado}
          selecionarFiltro={selecionarFiltro}
          numeroFuncionalidade={numeroFuncionalidade}
        />

        <Audience />

        <Gallery />

        <Team />

        <Contact />

      </main>

      <Footer />

    </div>
  )
}

export default App