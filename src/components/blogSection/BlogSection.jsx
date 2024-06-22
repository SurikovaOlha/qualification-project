import "./BlogSection.scss"
import Wrapper from "../wrapper/Wrapper.jsx";
import Img1 from "../../assets/blog-1.png";
import Img2 from "../../assets/blog-2.png";
import Img3 from "../../assets/blog-3.png";
import Img4 from "../../assets/blog-4.png";
import Img5 from "../../assets/blog-5.png";
import Img6 from "../../assets/blog-6.png";
import Img7 from "../../assets/blog-7.png";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
    {
        title: "Онлайн навчання для керівного складу контакт центру",
        img: Img1,
        date: "Лютий 2, 2024",
    },
    {
        title: "Участь в профільних конференціях",
        img: Img2,
        date: "Лютий 2, 2024",
    },
    {
        title: "DZWINNER 2023",
        img: Img3,
        date: "Лютий 2, 2024",
    },
    {
        title: "Наш досвід участі в грантових програмах",
        img: Img4,
        date: "Лютий 2, 2024",
    },
    {
        title: "Бізнес Гра МЕНЕДЖмейкер",
        img: Img5,
        date: "Січень 19, 2024",
    },
    {
        title: "Кращий продавець 2023",
        img: Img6,
        date: "Січень 19, 2024",
    },
    {
        title: "DZWinner 2022",
        img: Img7,
        date: "Січень 19, 2023",
    },
];

const BlogSection = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <section className="blog" id="BlogSection">
            <Wrapper>
                <div className="blog__text"  data-aos="fade-down">
                    <h3>Новини компанії</h3>
                    <p>про команду та її життя</p>
                </div>

                <div className="blog__container">
                    {blogs.map((blog, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="blog__card" key={"blog__card"+index} data-aos="fade-up"  data-aos-duration="2000" data-aos-offset="200">
                            <div className="blog__card-img">
                                <img src={blog.img} alt=""/>
                            </div>
                            <div className="blog__title">
                                {blog.title}
                            </div>
                            <h6>{blog.date}</h6>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
export default BlogSection