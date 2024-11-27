import S from "./doados.module.scss"
import livro from "../../assets/Doados/livro.png"

export default function Doados() {
  return (
    <main className={S.doados}>
      <div className={S.texto}>
        <h2>Livros Doados</h2>
      </div> 
    <figure className={S.caixa}>
       <img src={livro} alt= "imagem relacionada aos livros doados" />
    <figcaption className={S.descricao}>
       <ul>
         <li>O protagonista</li>
         <li>Susanne Andrade</li>
         <li>Ficção</li>
        </ul>
    </figcaption>
    </figure>
    </main>
  )
}

