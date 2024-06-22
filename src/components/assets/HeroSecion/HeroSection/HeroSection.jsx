import Navbar from "./Navabar/Navbar";
import Footer from "./Footer/Footer";
import { AnimatedTooltipPreview } from "./Skills/NewSkills";
import { CardHoverEffectDemo } from "./Experrience/ExperineceNew";
import Vortex from "../../../ui/vortex";
import SparklesPreview from "./Profile/SparklesPreview";
import Projects from "../../Project/Projects";
import star from './Star1.svg'
import star2 from './star2.svg'

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="relative z-10">
          <Navbar />
        </div>
        <div
          id="AboutPage"
          className="flex items-center  justify-around h-full"
        >
          <div className="absolute h-100 w-100 inset-0 overflow-hidden">
            <Vortex />
          </div>
          <div className="relative z-0 w-full">
            <SparklesPreview />
          </div>
        </div>
      </div>

      <div id="SkillPage" className="flex flex-col items-center gap-4 ">
        <h1 className="text-6xl mt-32 font-extrabold text-center">
          My TechStack
        </h1>
        <span className="mb-8 text-3xl  font-[400] text-center">
          Here are a few amazing technologies I have worked with and deep-dived
          into
        </span>
        <AnimatedTooltipPreview />
      </div>

      <div id="Experiencepage" className="w-full flex justify-center mt-32">
        <CardHoverEffectDemo />
      </div>
      <div className="relative w-full mt-20">
        <div className="flex justify-between">
          <span className="bg-gradient-to-r from-pink-300 to-transparent h-1 w-1/2"></span>
          <span className="bg-gradient-to-r from-transparent to-pink-300 h-1 w-1/2"></span>
        </div>
      </div>
      <div id="ProjectPAge" className="bg-zinc-900 pt-1">
        <div className="flex mt-32 flex-col items-center bg-zinc-900 text-white p-8 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <img src={star} alt="green star" className="w-5 h-5" />
            <h1 className="text-3xl font-semibold ">My Side Projects</h1>
            <img src={star2} alt="blue star" className="w-5 h-5" />
          </div>
          <p className="text-zinc-400 text-center">
            In free time, I develop webflow websites, write articles and build
            extensions 😊
          </p>
        </div>
        <Projects />
      </div>

      <div className="w-full mt-10">
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
