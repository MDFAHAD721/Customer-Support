import HeroImg from "../assets/vector1.png";

const Hero = ({ inProgressCount, resolvedCard }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6 mt-6">
        <div className="relative flex w-full md:w-1/2 h-62.5 rounded-2xl hero-gradient items-center justify-center overflow-hidden">
          <img
            src={HeroImg}
            alt="hero-design"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
          <div className="relative z-10 flex flex-col items-center text-white">
            <span className="text-xl font-medium">In-Progress</span>
            <span className="text-6xl font-bold">{inProgressCount}</span>
          </div>
          <img
            src={HeroImg}
            alt="hero-design"
            className="absolute right-0 top-0 h-full w-auto object-contain scale-x-[-1]"
          />
        </div>

        <div className="relative flex w-full md:w-1/2 h-62.5 rounded-2xl hero-gradient2 items-center justify-center overflow-hidden">
          <img
            src={HeroImg}
            alt="hero-design"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
          <div className="relative z-10 flex flex-col items-center text-white">
            <span className="text-xl font-medium">Resolved</span>
            <span className="text-6xl font-bold">{resolvedCard}</span>
          </div>
          <img
            src={HeroImg}
            alt="hero-design"
            className="absolute right-0 top-0 h-full w-auto object-contain scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
