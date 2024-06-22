import "./CommandSection.scss";
import Wrapper from "../wrapper/Wrapper.jsx";
import Img1 from "../../assets/command-1.jpg";
import Img2 from "../../assets/command-2.jpg";
import Img3 from "../../assets/command-3.jpg";
import Img4 from "../../assets/command-4.jpg";
import Img5 from "../../assets/command-5.jpg";
import Img6 from "../../assets/command-6.jpg";
import Img7 from "../../assets/command-7.jpg";

const CommandSection = () => {
    return (
        <section className="command">
            <Wrapper className="command__container">
                <p>найкращі в своїй справі</p>
                <h5>Наша команда</h5>
                <div className="command__up">
                    <div className="command__card">
                        <h4><i>Ольга</i> – співвласниця</h4>
                        <img src={Img1} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Юлія</i> – співвласниця</h4>
                        <img src={Img2} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Артур</i> – СЕО</h4>
                        <img src={Img3} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Тетяна</i> – комерційний директор</h4>
                        <img src={Img4} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Анна</i> – проєктний менеджер</h4>
                        <img src={Img5} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Ольга</i> – керівник направлення</h4>
                        <img src={Img6} alt=""/>
                    </div>

                    <div className="command__card">
                        <h4><i>Христина</i> – керівник направлення</h4>
                        <img src={Img7} alt=""/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default CommandSection