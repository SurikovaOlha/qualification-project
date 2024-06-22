import "./ChipsSection.scss"
import Wrapper from "../wrapper/Wrapper";
import ChipsImg from "../../assets/chips.png"
import TickImg from "../../assets/arrow.svg"
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChipsSection = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <section className="chips">
            <Wrapper className="chips__container">
                <div className="chips__left" >
                    <h3 data-aos="flip-up">Наші <i>"Фішечки"</i></h3>

                    <div className="chips__text" data-aos="flip-up">
                        <img src={TickImg} alt=""/>
                        <div>
                            <p><b>80% команди</b> з досвідом роботи в контакт центрах та продажах</p>
                        </div>
                    </div>

                    <div className="chips__text" data-aos="flip-up">
                        <img src={TickImg} alt=""/>
                        <div>
                            <p><b>3+</b> Мінімум стільки варіантів вирішення проблеми ми пропонуємо при її виникненні</p>
                        </div>
                    </div>

                    <div className="chips__text" data-aos="flip-up">
                        <img src={TickImg} alt=""/>
                        <div>
                            <p><b>10</b> видів тренінгів</p>
                        </div>
                    </div>

                    <div className="chips__text" data-aos="flip-up">
                        <img src={TickImg} alt=""/>
                        <div>
                            <p>Мобільний формат, диверсифікація роботи ліній та проектів.</p>
                        </div>
                    </div>

                    <div className="chips__text" data-aos="flip-up">
                        <img src={TickImg} alt=""/>
                        <div>
                            <p>Власна розробка – настільна гра «Менеджмейкер»</p>
                        </div>
                    </div>
                </div>

                <div className="chips__right" data-aos="fade-up-left">
                    <img src={ChipsImg} alt="" className="img-1"/>
                </div>
            </Wrapper>
        </section>
    )
}

export default ChipsSection