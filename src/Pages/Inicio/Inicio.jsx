import S from "./inicio.module.scss"
import img1 from "../../assets/Inicio/img-1.png";
import img2 from "../../assets/Inicio/img-2.png";
import img3 from "../../assets/Inicio/img-3.png";
import img4 from "../../assets/Inicio/img-4.png";
import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [Titulo, setTitulo] = useState('');

  useEffect(() => {
    const titulo =
      "VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO";
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTitulo(titulo.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > titulo.length) clearInterval(interval);
    }, 120); 

    return () => clearInterval(interval); 
  }, []);

  return (
  <main className={S.inicio}>
      <section className={S.logo}>
          <h2>{Titulo}</h2>
      </section>
      <section className={S.devoDoar}>
          <div>
              <h2>Por que devo doar?</h2>
          </div>
          <section className={S.cards}>
            <article>
              <img src={img1} alt="imagem de inclusão social" />
              <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </article>
            <article>
              <img src={img2} alt="imagem que estimula a leitura" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </article>
            <article>
              <img src={img3} alt="imagem de transformar vidas" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </article>
            <article>
              <img src={img4} alt="imagem de garantia de direitos" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </article>
          </section>
      </section>
  </main>
  )
}
