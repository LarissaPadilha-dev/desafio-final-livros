import logo from "../../assets/Header/logo.png";
import busca from "../../assets/Header/lupa.png";
import {Link} from 'react-router-dom';
import { useState } from "react";
import S from "./header.module.scss"


export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
    return (
      <header className={S.header}>
          <section className={S.boxLogo}>
              <img src={logo} alt="imagem de logo de livros" />
              <h1>Livros Vai na web</h1>
          </section>
          <button className={S.hamburger} onClick={toggleMenu}>
          ☰
          </button>
          <nav className={`${S.paginas} ${menuAberto ? S.ativo : ""}`}>
            <ul>
              <li><Link className={S.link} to="/">Início</Link></li>
              <li><Link className={S.link} to="/doados">Livros Doados</Link></li>
              <li><Link className={S.link} to="/queroDoar">Quero Doar</Link></li>
            </ul>
          </nav>
          <div className={S.busca}>
                <input type="text" placeholder='O que você procura?' />
                <img src={busca} alt="" />
        
          </div>
      </header>
    )
  }