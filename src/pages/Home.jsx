import AboutUs from "../components/AboutUs";
import ContactBookingForm from "../components/ContactBookingForm";
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

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServicesSection />
      <OurSpecialists />
      <AboutUs />
      <MakesUsSpecial />
      <ContactBookingForm />
      <HowItWorks />
      <SpecialOffers />
      <FAskedQuestions />
      <Testimonials />
      <GoogleMap />
    </>
  );
};

export default Home;
