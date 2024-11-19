import logo from "../../assets/Header/logo.png";
import busca from "../../assets/Header/lupa.png";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import S from "./header.module.scss"


export default function header() {
    return (
      <BrowserRouter>
      <header>
          <section className={S.boxLogo}>
              <img src={logo} alt="imagem de logo de livros" />
              <h1>Livros Vai na web</h1>
          </section>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/doados">Livros Doados</Link></li>
            <li><Link to="/queroDoar">Quero Doar</Link></li>
          </ul>
          <div>
          <input
            type="text"
            placeholder="O que você procura?"
          />
          <img src={busca} alt="icone de busca" />
          </div>
      </header>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/doados' element={<Doados/>} />
        <Route path='/queroDoar' element={<QueroDoar/>} />
      </Routes>
      </BrowserRouter>
    )
  }