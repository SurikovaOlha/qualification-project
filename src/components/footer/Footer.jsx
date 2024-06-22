import './Footer.scss'
import Wrapper from "../wrapper/Wrapper.jsx";
import Logo from "../../assets/logo_new.png";
import {useState} from "react";
import Modal from "../modal/Modal.jsx";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <section className="footer">
            <Wrapper>
                <div className="footer__down">
                    <div className="footer__logo">
                        <img src={Logo} alt=""/>
                    </div>

                    <div className="footer__text">
                        <a href="#" className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Залишити
                            заявку</a>

                        <Modal active={modalActive} setActive={setModalActive}/>

                        <p>м. Житомир, проспект Незалежності 184</p>

                        <a href="https://www.instagram.com/letscall.ua/">Instagram</a>

                        <a href="admin@letscall.com.ua">admin@letscall.com.ua</a>
                    </div>
                </div>

                <ul className="footer__links">
                    <li><a href="#ServicesSection">Послуги</a></li>

                    <li><a href="#CasesSection">Кейси</a></li>

                    <li><a href="#AboutSection">Про компанію</a></li>

                    <li><a href="#BlogSection">Блог</a></li>
                </ul>
            </Wrapper>
        </section>
    )
}

export default Footer