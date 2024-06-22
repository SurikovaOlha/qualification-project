import './Modal.scss';
import CallBack from "../../assets/call-back.png";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "mo"} onClick={e => e.stopPropagation()}>
                <img src={CallBack} alt="" className="img-1"/>

                <h4>Ви можете залишити свій запит та ми негайно зв'яжемось з Вами</h4>

                <form>
                    <input type="text" placeholder="Ваше ім'я:" required/>
                    <input type="tel" placeholder="Ваш телефон:" required/>
                    <input type="email" placeholder="Ваш Email:"/>
                    <input type="text" placeholder="Коментар:"/>

                    <input type="submit" value="Залишити заявку" className="button-primary"/>
                </form>
            </div>
            {children}
        </div>
    );
};

export default Modal