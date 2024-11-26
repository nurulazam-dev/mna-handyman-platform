import FAskedQuestions from "../components/FAskedQuestions";
import Features from "../components/Features";
import Hero from "../components/Hero";
import PopularServices from "../components/PopularServices";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <PopularServices />
      <Testimonials />
      <FAskedQuestions />
    </>
  );
};

export default Home;
