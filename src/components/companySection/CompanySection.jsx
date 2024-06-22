import './CompanySection.scss';
import Wrapper from "../wrapper/Wrapper";
import Company1 from "../../assets/company-1.png"
import Company2 from "../../assets/company-2.png"
import Company3 from "../../assets/company-3.png"
import Company4 from "../../assets/company-4.png"
import Company5 from "../../assets/company-5.png"
import Company6 from "../../assets/company-6.png"
import Company7 from "../../assets/company-7.png"
import Company8 from "../../assets/company-8.png"
import Company9 from "../../assets/company-9.png"
import Company10 from "../../assets/company-10.png"
import Company11 from "../../assets/company-11.png"
import Company12 from "../../assets/company-12.png"
import Company13 from "../../assets/company-13.png"
import Company14 from "../../assets/company-14.png"
import Company15 from "../../assets/company-15.png"
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CompanySection = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            easing: "ease-out-cubic",
        });
    }, []);
    return <section className="company">
        <Wrapper>
            <p>нам довіряють</p>
            <h4>Наші партнери</h4>
            <div className="company__companies">
                <img src={Company1} alt=""  data-aos="flip-left"/>
                <img src={Company2} alt="" data-aos="flip-right"/>
                <img src={Company3} alt="" data-aos="flip-left"/>
                <img src={Company4} alt="" data-aos="flip-right"/>
                <img src={Company5} alt="" data-aos="flip-left"/>
                <img src={Company6} alt="" data-aos="flip-right"/>
                <img src={Company7} alt="" data-aos="flip-left"/>
                <img src={Company8} alt="" data-aos="flip-right"/>
                <img src={Company9} alt="" data-aos="flip-left"/>
                <img src={Company10} alt="" data-aos="flip-right"/>
                <img src={Company11} alt="" data-aos="flip-left"/>
                <img src={Company12} alt="" data-aos="flip-right"/>
                <img src={Company13} alt="" data-aos="flip-left"/>
                <img src={Company14} alt="" data-aos="flip-right"/>
                <img src={Company15} alt="" data-aos="flip-left"/>
            </div>
        </Wrapper>
    </section>
}

export default CompanySection