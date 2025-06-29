import Footer from "../components/Footer";
import HeroSection from "../components/HomeHero";
import ProductShowcase from "../components/ProductsShow";
import PremiumTestimonials from "../components/Testimonals";
import WhyChooseUs from "../components/WhyChosse";

export default function Home(){
    return(
        <>
        <HeroSection />
        <ProductShowcase />
        <WhyChooseUs />
        <PremiumTestimonials />
        <Footer />
        </>
    )
}