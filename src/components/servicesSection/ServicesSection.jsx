import "./ServicesSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/feature-1.png"
import Img2 from "../../assets/feature-2.png"
import Img3 from "../../assets/feature-3.png"
import Img4 from "../../assets/feature-4.png"
import Img5 from "../../assets/feature-5.png"
import Img6 from "../../assets/feature-6.png"
import Img7 from "../../assets/feature-7.png"
import Img8 from "../../assets/feature-8.png"
import Img9 from "../../assets/feature-9.png"
import {useEffect, useState} from "react";
import Modal from "../modal/Modal.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            easing: "ease-out-cubic",
        });
    }, []);

    const [modalActive, setModalActive] = useState(false);

    return (
        <section className="features" id="ServicesSection">
            <Wrapper>
                <div  data-aos="fade-right" className="features__text">
                    <h3>Послуги</h3>
                    <p>З наступними послугами Ми зможемо надати Вам результат, який підвищить рівень роботи вашої команди</p>
                </div>

                <div className="features__container">
                    <div className="features__feature dark-feature" data-aos="fade-right">
                        <img src={Img1} alt=""/>
                        <h4 className="dark-feature-title">Call Center</h4>
                        <p>Постійний набір та навчання, адаптація, аналіз показників, покращення обслуговування клієнтів
                            та збільшення продажів. З нашим досвідом запуску проєктів й уявляти не потрібно, тільки
                            написати - все зробимо.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна консультація</button>
                    </div>

                    <div className="features__feature white-feature" data-aos="fade-left">
                        <img src={Img2} alt=""/>
                        <h4 className="white-feature-title">Аудит</h4>
                        <p>Команда спеціалістів сформує об'єктивний погляд на функціонування вашого бізнесу та визначить
                            можливості для вдосконалення, пропише покроковий план покращення кожного процесу.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature dark-feature" data-aos="fade-right">
                        <img src={Img3} alt=""/>
                        <h4 className="dark-feature-title">Побудова відділу під ключ</h4>
                        <p>Збереження часу, зусиль на пошук та навчання персоналу, швидкий початок роботи, мінімізація
                            ризиків, гарантія якості та використання актуальних ресурсів. Наша команда зробить це за Вас
                            та надасть готові рішення, інструкції, методики, щоб Ваші спеціалісти показали
                            результат.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature white-feature"  data-aos="fade-left">
                        <img src={Img4} alt=""/>
                        <h4 className="white-feature-title">Навчання / Тренінги</h4>
                        <p>В нашому навчанні зібраний концентрат тих знань, інструментів та способів досягнення
                            результату, які працюють та підтвердженій на практиці десяток компаній. Зробіть стратегічне
                            рішення для розвитку компетенцій та підвищення ефективності вашого персоналу.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature dark-feature" data-aos="fade-right">
                        <img src={Img5} alt=""/>
                        <h4 className="dark-feature-title">Аутстаф</h4>
                        <p>Готовий співробітник високого рівня компетенцій та навичок, який за короткий період часу може
                            вирішити нагальні завдання та покращити сервіс або продажі. Наші спеціалісти візьмуть на
                            себе від консультацій та бізнес-планування до реалізації та комплексного управління вашим
                            відділом.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature white-feature"  data-aos="fade-left">
                        <img src={Img6} alt=""/>
                        <h4 className="white-feature-title">Настільна гра для менеджерів</h4>
                        <p>Тренінги не дають результату, співробітники не використовують методи отримані на навчанні та
                            не сприймають нововведення? Ексклюзив! Власна запатентована розробка розвитку навичок
                            менеджерів та управлінців. Оцінка компетенцій і поточного рівня soft skills.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature dark-feature" data-aos="fade-right">
                        <img src={Img7} alt=""/>
                        <h4 className="dark-feature-title">Створення скриптів</h4>
                        <p>Дієвий інструмент для керівників, щоб покращити комунікацію з клієнтами та підвищити продажі.
                            Всього за декілька днів ВИ отримаєте скрипт, сформований на основі роботи з багатьма
                            відомими компаніями, презентацію під потреби (критерії вибору) вашого клієнта та приклади
                            відпрацювання заперечень. </p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature white-feature" data-aos="fade-left">
                        <img src={Img8} alt=""/>
                        <h4 className="white-feature-title">Верифікація звуків</h4>
                        <p>Хочете дізнатися на скільки скалібровані ваші процеси та співробітники, зрозуміти як
                            покращити сервіс та якість. Наша команда порівняє підходи до оцінки незалежним способом та
                            надасть рекомендації.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <div className="features__feature dark-feature" data-aos="fade-right">
                        <img src={Img9} alt=""/>
                        <h4 className="dark-feature-title">Таємний візит</h4>
                        <p>Всього за 9 комунікацій (таємних) наша команда визначить співвідношення дотримання
                            стандартів, ефективність, швидкість відповіді на запит клієнта та дружелюбність команди.
                            Сформує рекомендації, які підвищать лояльність клієнтів та результат.</p>

                        <button className="button-primary navbar__btn" onClick={() => setModalActive(true)}>Безкоштовна
                            консультація</button>
                    </div>

                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>
            </Wrapper>
        </section>
    )
}

export default ServicesSection;