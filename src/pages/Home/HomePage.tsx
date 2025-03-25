import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <MainLayout>
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="heading text-center text-3xl md:text-5xl lg:text-7xl">
          Hi<span className="waving-emoji">👋</span>, I am Uneeb Bhatti
        </h1>
        <p className="mt-4 text-xl text-center">
          I am a <span className="font-semibold">Full-Stack Web Developer</span>{" "}
          & Founder of{" "}
          <span className="font-semibold">Codemaven Solutions</span>
        </p>

        {/* Buttons */}
        <div className="flex home-buttons items-center justify-center gap-[15px] mt-4">
          <Link to="/about" className="w-full">
            <Button className="w-full">About Me</Button>
          </Link>
          <Link to="/projects" className="w-full">
            <Button className="w-full">Projects</Button>
          </Link>
          <Link to="/printing-projects" className="w-full">
            <Button className="w-full">Printing Business</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
