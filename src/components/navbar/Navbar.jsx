import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import {Link} from "react-router-dom";
import Logo from '../../assets/logo.svg'
import { FaBars} from "react-icons/fa";
import {useState} from "react";
import Modal from "../modal/Modal.jsx";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const [modalActive, setModalActive] = useState(false);

    return (
        <nav className="navbar">
        <Wrapper className="navbar__container">
            <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                <img src={Logo} alt=""/>
            </a>

            <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
                <li><a href="#ServicesSection">Послуги</a></li>

                <li><a href="#CasesSection">Кейси</a></li>

                <li><a href="#AboutSection">Про компанію</a></li>

                <li><a href="#BlogSection">Блог</a></li>
            </ul>

            <a href="#" className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Залишити заявку</a>

            <Modal active={modalActive} setActive={setModalActive}/>

            <div className={`navbar__menubar ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}>
                <FaBars />
            </div>
        </Wrapper>
    </nav>)
};

export default Navbar