import HeroImg from "../assets/vector1.png";

const Hero = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row overflow-hidden gap-6 mt-6">
        <div className="flex w-full md:w-1/2 rounded-2xl hero-gradient relative items-center justify-center">
          <img
            src={HeroImg}
            alt="hero-design"
            className=" object-cover w-1/2 rounded-l-2xl"
          />
          <div className="relative z-10 flex flex-col items-center text-white">
            <span className="text-xl font-medium">Resolved</span>
            <span className="text-6xl font-bold">0</span>
          </div>
          <img
            src={HeroImg}
            alt="hero-design"
            className=" object-cover scale-x-[-1]  w-1/2 rounded-l-2xl"
          />
        </div>

        <div className="relative items-center justify-center flex w-full md:w-1/2 hero-gradient2 rounded-2xl">
          <img
            src={HeroImg}
            alt="hero-design"
            className="object-cover w-1/2 rounded-l-2xl"
          />
          <div className="relative z-10 flex flex-col items-center text-white">
            <span className="text-xl font-medium">Resolved</span>
            <span className="text-6xl font-bold">0</span>
          </div>
          <img
            src={HeroImg}
            alt="hero-design"
            className="object-cover scale-x-[-1] w-1/2 rounded-l-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
