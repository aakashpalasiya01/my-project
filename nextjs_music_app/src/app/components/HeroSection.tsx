import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const HeroSection = () => {
  const words = `Dive into our comprehensive music Courses and transform your musical journey today. Wheather you're a beginner or looking to refine your skills, join us to unlock your true potential.
`;
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-10 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center text-white">
          <h1 className="mt20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from bg-neutral-50 to bg-neutral-400n">
            Master the art of music
          </h1>

          <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            <TextGenerateEffect words={words} />
          </div>
          <div className="mt-4">
            <Button>Explore Courses</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
