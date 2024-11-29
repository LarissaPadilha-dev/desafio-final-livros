import facebook from "../../assets/Footer/facebook.png";
import twitter from "../../assets/Footer/twitter.png";
import youtube from "../../assets/Footer/youtube.png";
import linkedin from "../../assets/Footer/linkedin.png";
import instagram from "../../assets/Footer/instagram.png";
import S from "./footer.module.scss"


export default function footer() {
  return (
    <footer className={S.footer}>
        <section className={S.icones}>
            <h3>4002-8922</h3>
            <nav>
                <a href=""><img src={facebook} alt="ícone do facebook" /></a>
                <a href=""><img src={twitter} alt="ícone do twitter" /></a>
                <a href=""><img src={youtube} alt="ícone do youtube" /></a>
                <a href=""><img src={linkedin} alt="ícone do linkedin" /></a>
                <a href=""><img src={instagram} alt="ícone do instagram" /></a>
            </nav>
        </section>
        <section className={S.end}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
        </section>

    </footer>
  )
}

