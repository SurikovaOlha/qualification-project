import './AboutSection.scss'
import Wrapper from "../wrapper/Wrapper";
import About1 from "../../assets/about-1.png";
import About2 from "../../assets/about-2.png";
import Img1 from "../../assets/gears.png";
import Img2 from "../../assets/list.png";
import Img3 from "../../assets/graph.png";
import Img4 from "../../assets/coins.png";
import Img5 from "../../assets/handshake.png";
import Img6 from "../../assets/team.png";
import Img7 from "../../assets/medal.png";
import Check from "../../assets/check.svg";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <section className="about" id="AboutSection">
            <Wrapper className="about__container">
                <div className="about__container-block">
                    <div className="about__left">
                        <h3 data-aos="zoom-in-right">Чому ми?</h3>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img1} alt=""/>
                            <div>
                                <p><b>9+</b> років досвіду створення та управління проектами різної складності</p>
                            </div>
                        </div>

                        <div className="about__text"  data-aos="zoom-in-right">
                            <img src={Img2} alt=""/>
                            <div>
                                <p><b>30+</b> проектів запущено командою</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img3} alt=""/>
                            <div>
                                <p><b>+20%</b> середній показник зростання результатів в партнерстві з нами</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img4} alt=""/>
                            <div>
                                <p><b>12%</b> середній показник економії часу та грошей наших клієнтів при підключенні
                                    нас</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img5} alt=""/>
                            <div>
                                <p><b>100%</b> Саме на стільки відсотків ми впевнені, що співпраця з нами принесе
                                    прибуток і задоволення.</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img6} alt=""/>
                            <div>
                                <p>Ріст від <b>0 до 70</b> операторів за квартал – швидкість масштабування</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Img7} alt=""/>
                            <div>
                                <p><b>98%</b> рівень задоволенності наших партнерів</p>
                            </div>
                        </div>
                    </div>

                    <div className="about__right" data-aos="zoom-in-left" data-aos-duration="2000">
                        <img src={About1} alt="" className="img-1"/>
                    </div>
                </div>

                <div className="about__container-block">
                    <div className="about__right" data-aos="zoom-in-left" data-aos-duration="2000">
                        <img src={About2} alt=""/>
                    </div>

                    <div className="about__left">
                        <h3 data-aos="zoom-in-right">Що Ви отримуєте від нашої співпраці?</h3>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Економія часу на пошук, підбір, утримання персоналу</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Скорочення витрат на адаптацію, навчання та заробітну плату</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Покращення показників сервісу та продажів за рахунок контролю показників та дій, щодо
                                    їх
                                    покращення</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Систематичний зворотній зв’язок та повний аналізу роботи, як лінії, так і проекту</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Налагодження процесів з нуля та оперативне коригування</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Швидка підтримка під час пікового навантаження ліній/сезону</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Збільшення прибутку за рахунок правильного управління та виконання планів</p>
                            </div>
                        </div>

                        <div className="about__text" data-aos="zoom-in-right">
                            <img src={Check} alt=""/>
                            <div>
                                <p>Нові підходити, удосконалення процесів та знань співробітників</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default AboutSection