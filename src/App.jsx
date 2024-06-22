import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CompanySection from "./components/companySection/CompanySection";
import ServicesSection from "./components/servicesSection/ServicesSection.jsx";
import ChipsSection from "./components/chipsSection/ChipsSection.jsx";
import CommandSection from "./components/commandSection/CommandSection.jsx";
import CasesSection from "./components/casesSection/CasesSection.jsx";
import AboutSection from "./components/aboutSection/AboutSection.jsx";
import BlogSection from "./components/blogSection/BlogSection.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <CompanySection />
      <ChipsSection />
      <CommandSection />
      <CasesSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App