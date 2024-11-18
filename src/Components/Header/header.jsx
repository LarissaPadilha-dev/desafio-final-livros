import logo from "../../assets/Header/logo.png";

export default function header() {
    return (
      <header>
          <section>
              <img src={logo} alt="imagem de livro" />
              <h1>Livros Vai na web</h1>
          </section>
          <ul>
            <li>Início</li>
            <li>Livros Doados</li>
            <li>Quero Doar</li>
          </ul>
          <input
            name="search"
            type="text"
            placeholder="O que você procura?"
          />
      </header>
    )
  }