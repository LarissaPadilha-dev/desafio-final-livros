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
            <p>4002-8922</p>
            <div>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
        </section>
        <section className={S.texto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
        </section>

    </footer>
  )
}

