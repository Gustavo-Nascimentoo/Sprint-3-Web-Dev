import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'
import mockup3 from '../assets/mockup3.png'
import mockup4 from '../assets/mockup4.png'
import mockup5 from '../assets/mockup5.png'

const images = [
  {
    imagem: mockup5,
    titulo: 'Captura Inteligente',
    texto: 'IA detecta rosto, luz e texto em tempo real'
  },
  {
    imagem: mockup4,
    titulo: 'Foto para Texto',
    texto: 'Extração de texto direto da imagem via OCR'
  },
  {
    imagem: mockup2,
    titulo: 'Organização Inteligente',
    texto: 'Fotos separadas por álbum e assunto'
  },
  {
    imagem: mockup1,
    titulo: 'Aba Inicial',
    texto: 'Acesso rápido a câmera, filtros e favoritos'
  },
  {
    imagem: mockup3,
    titulo: 'Galeria',
    texto: 'Galeria de favoritos com efeitos e cores'
  }
]

function Gallery() {

  return (
    <section id="galeria">

      <div className="container">

        <div className="section-head reveal">

          <span className="eyebrow">
            Galeria
          </span>

          <h2 className="section-title">
            Veja o OPT Cam em ação
          </h2>

          <p className="section-text">
            Conheça as principais telas e experiências desenvolvidas
            para a solução.
          </p>

        </div>

        <div className="grid-gallery">

          {images.map((item, index) => (

            <div
              className="gallery-item"
              key={index}
            >

              <div className="gallery-media">

                <img
                  src={item.imagem}
                  alt={item.titulo}
                />

              </div>

              <div className="gallery-caption">

                <strong>
                  {item.titulo}
                </strong>

                <span>
                  {item.texto}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Gallery