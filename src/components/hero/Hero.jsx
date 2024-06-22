import './Hero.scss';
import Wrapper from "../wrapper/Wrapper";
import {useState} from "react";
import Modal from "../modal/Modal.jsx";


const Hero = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <section className="hero">
            <Wrapper className='hero__container'>
                <div className="hero__left">
                    <p>МИ ЧАСТИНА КОЖНОЇ КОМПАНІЇ, З ЯКОЮ РАЗОМ СТВОРЮЄМО ТА ПОКРАЩУЄМО ОНЛАЙН СЕРВІС
                    </p>

                    <h1>Послуги для бізнесу</h1>


                    <div className="description">
                        <div className="wrap">
                            <div id="check-part-1" className="check-sign"></div>
                            <div id="check-part-2" className="check-sign"></div>
                        </div>

                        <p>Let’s call – це управлінський консалтинг, який забезпечить підвищення ефективності роботи
                        компанії, оптимізацію процесів і збільшення прибутків. Відпрацьовані роками методики, алгоритми,
                        процеси та команда з досвідом це те, що допомагає формувати для вас найкращі рішення.</p>
                    </div>

                    <div className="hero__btn-container">
                        <a href="#" className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Залишити
                            заявку</a>

                        <Modal active={modalActive} setActive={setModalActive}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
};

export default Hero