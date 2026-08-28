import gustavo from '../assets/gustavo.jpeg'
import leo from '../assets/leo.jpeg'
import joao from '../assets/joao.jpeg'
import rafael from '../assets/rafael.png'

const team = [
  {
    nome: 'Gustavo Almeida',
    cargo: 'Desenvolvimento Back-end',
    descricao: 'Responsável pela estrutura e funcionamento dos recursos do sistema no lado do servidor.',
    imagem: gustavo
  },
  {
    nome: 'Leonardo Teodoro',
    cargo: 'Design e Experiência do Usuário',
    descricao: 'Responsável pela identidade visual e pela experiência de uso da solução.',
    imagem: leo
  },
  {
    nome: 'João Gabriel',
    cargo: 'Documentação e Revisão',
    descricao: 'Responsável pela organização, revisão e documentação do projeto.',
    imagem: joao
  },
  {
    nome: 'Rafael Nischida',
    cargo: 'Desenvolvimento Front-end',
    descricao: 'Responsável pela construção da interface e implementação visual da solução.',
    imagem: rafael
  }
]

function Team() {

  return (
    <section id="equipe">

      <div className="container">

        <div className="section-head center reveal">

          <h2 className="section-title">
            Quem está por trás do OPT Cam
          </h2>

        </div>

        <div className="grid-team">

          {team.map((member, index) => (

            <div
              className="card-team reveal"
              key={index}
            >

              <div className="avatar-placeholder">

                <img
                  src={member.imagem}
                  alt={member.nome}
                />

              </div>

              <div className="team-info">

                <h3>
                  {member.nome}
                </h3>

                <span className="team-role">
                  {member.cargo}
                </span>

                <p>
                  {member.descricao}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Team