import { useState } from 'react'

function Contact() {

  const [nome, setNome] = useState('')
  const [mensagemEnviada, setMensagemEnviada] = useState(false)

  function enviarMensagem(event) {

    event.preventDefault()

    if (nome.trim() !== '') {
      setMensagemEnviada(true)
    }

  }

  return (
    <section id="contato">

      <div className="container">

        <div className="section-head reveal">

          <span className="eyebrow">
            Contato
          </span>

          <h2 className="section-title">
            Fale com a gente
          </h2>

          <p className="section-text">
            Quer conhecer mais sobre o OPT Cam?
            Entre em contato com nossa equipe.
          </p>

        </div>

        <div className="grid-contact">

          <div className="grid-contact-info reveal">

            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h4>E-mail</h4>
                <p>Optcamfiap@gmail.com</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                @
              </div>

              <div>
                <h4>Instagram</h4>
                <p>@Optcam</p>
              </div>

            </div>

            <p className="contact-note">
              Este projeto foi desenvolvido para o Challenge
              FIAP em parceria com a JOVI Smartphone.
            </p>

          </div>

          <form
            className="contact-form reveal"
            onSubmit={enviarMensagem}
          >

            <div className="form-grid">

              <div className="field field--full">

                <label htmlFor="nome">
                  Nome
                </label>

                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(event) =>
                    setNome(event.target.value)
                  }
                  placeholder="Como podemos te chamar?"
                  required
                />

              </div>

              <div className="field field--full">

                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="seuemail@exemplo.com"
                  required
                />

              </div>

              <div className="field field--full">

                <label htmlFor="mensagem">
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  placeholder="Conte um pouco sobre o que você gostaria de saber."
                  required
                ></textarea>

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Enviar
            </button>

            {mensagemEnviada && (

              <p className="form-success">
                Obrigado, {nome}! Mensagem registrada com sucesso.
              </p>

            )}

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact