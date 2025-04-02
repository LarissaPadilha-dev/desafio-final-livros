import S from "./doados.module.scss"
import livro from "../../assets/Doados/livro.png"
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados() {

  const [livros, setLivros] = useState([])

  const getLivros = async () => {
    try {
        const response = await axios.get("https://desafio-2-api-livros-vai-na-web-1al1.onrender.com/livros")
        setLivros(response.data)
    } catch (error) {
        console.error("Erro ao buscar livros:", error)
    }
}

  useEffect(() => {
  getLivros()
}, [])

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
          {livros.map((item) => (
          <article key={item.id}>
              <img src={item.imagem_url} alt={item.titulo} />
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
          </article>
          ))}
        </section>
    </main>
  )
}

