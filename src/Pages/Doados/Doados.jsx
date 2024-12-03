import S from "./doados.module.scss"
import livro from "../../assets/Doados/livro.png"

export default function Doados() {
  return (
    <main className={S.doados}>
        <h2>Livros Doados</h2>
        <section className={S.descricao}>
          <article>
              <img src={livro} alt= "imagem relacionada aos livros doados" />
              <h3>O protagonista</h3>
              <p>Susanne Andrade</p>
               <p>Ficção</p>
          </article>
          <article>
              <img src={livro} alt= "imagem relacionada aos livros doados" />
              <h3>O protagonista</h3>
              <p>Susanne Andrade</p>
               <p>Ficção</p>
          </article>
          <article>
              <img src={livro} alt= "imagem relacionada aos livros doados" />
              <h3>O protagonista</h3>
              <p>Susanne Andrade</p>
               <p>Ficção</p>
          </article>
        </section>
    </main>
  )
}

