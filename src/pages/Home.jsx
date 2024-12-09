import AboutUs from "../components/AboutUs";
import FAskedQuestions from "../components/FAskedQuestions";
import Features from "../components/Features";
import GoogleMap from "../components/GoogleMap";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MakesUsSpecial from "../components/MakesUsSpecial";
import OurSpecialists from "../components/OurSpecialists";
import ServicesSection from "../components/ServicesSection";
import SpecialOffers from "../components/SpecialOffers";
import Testimonials from "../components/Testimonials";
import Blog from "./Blog";
import ServiceBookingForm from "../components/ServiceBookingForm";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServicesSection />
      <OurSpecialists />
      <AboutUs />
      <MakesUsSpecial />
      <ServiceBookingForm />
      <HowItWorks />
      <SpecialOffers />
      <FAskedQuestions />
      <Testimonials />
      <GoogleMap />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
