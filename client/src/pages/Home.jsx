import Footer from "../components/Footer";
import HeroSection from "../components/HomeHero";
import ProductShowcase from "../components/ProductsShow";
import WhyChooseUs from "../components/WhyChosse";

export default function Home(){
    return(
        <>
        <HeroSection />
        <ProductShowcase />
        <WhyChooseUs />
        <Footer />
        </>
    )
}