import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="heading text-3xl md:text-5xl lg:text-7xl text-center">
          Hi<span className="waving-emoji">👋</span>, I am Uneeb Bhatti
        </h1>
        <p className="mt-4 text-xl">I am a Full-Stack web developer</p>
        <div className="flex items-center justify-center gap-[15px] mt-4">
          <Link to="/about">
            <Button>About me</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
