import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import myImg from "@/assets/uneeb.jpg";
import resume from "@/assets/resume.svg";

const AboutPage: FC = () => {
  const languages = [
    {
      name: "React",
      color: "#61dbfb",
    },
    {
      name: "MongoDb",
      color: "#3fa037",
    },
    {
      name: "JavaScript",
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      color: "#264de4",
    },
    {
      name: "HTML",
      color: "#e34c26",
    },
    {
      name: "CSS",
      color: "#264de4",
    },
    {
      name: "Express",
      color: "#f7df1e",
    },
    {
      name: "Node",
      color: "#3c873a",
    },
    {
      name: "Git",
      color: "#ef5b25",
    },
    {
      name: "Figma",
      color: "#a259ff",
    },
    {
      name: "Illustrator",
      color: "#340100",
    },
    {
      name: "Photoshop",
      color: "#001e36",
    },
    {
      name: "Postman",
      color: "#e34c26",
    },
    {
      name: "Github",
      color: "#171515",
    },
    {
      name: "TailwindCSS",
      color: "#61dbfb",
    },
  ];
  return (
    <>
      <MainLayout>
        <PageLayout title={"About"}>
          <div className="flex flex-col md:flex-row">
            <div className="left w-full md:w-1/4 text-center p-4">
              <img src={myImg} alt="Uneeb" className="mx-auto" />
              <h3 className="heading mt-2 text-2xl">Uneeb Bhatti</h3>
              <p className="text-[14px]">Full-stack developer</p>
            </div>

            <div className="right w-full md:w-2/3 p-4">
              <div>
                <p className="font-bold">Hello, Everyone! 👋</p>
                <br />
                <p>
                  As a full-stack web developer, I specialize in merging
                  front-end design with back-end functionality to create
                  seamless and intuitive user experiences. I thrive on tackling
                  the complexities of both client and server-side technologies,
                  crafting robust solutions that drive innovation in the digital
                  world.
                </p>
                <br />
                <p>
                  I am currently pursuing a{" "}
                  <span className="font-bold">
                    Bachelor of Science in Information Technology
                  </span>{" "}
                  (BSIT) at the{" "}
                  <span className="font-bold">
                    University of Management and Technology
                  </span>
                  (UMT). Alongside my studies, I have been focused on mastering
                  the MERN stack and staying up-to-date with the latest industry
                  trends and technologies.
                </p>
                <br />
                <p>
                  My professional journey began with a front-end development
                  internship at <span className="font-bold">Concypt</span> from
                  June 2023 to August 2023. This opportunity provided hands-on
                  experience working on real-world projects, allowing me to
                  refine my skills in front-end technologies and user experience
                  design.
                </p>
                <br />
                <p>
                  Most recently, I completed an internship at{" "}
                  <span className="font-bold">TokenTalentHR</span>, a startup,
                  where I primarily worked on the back-end of their mobile
                  application. This internship, from August 21, 2024, to
                  September 19, 2024, provided me with the opportunity to dive
                  deeper into back-end development, working with server-side
                  technologies to support mobile app functionality.
                </p>
                <br />
                <p>
                  In addition to my internships, I’ve also been working on my
                  personal project, ClientFlow, a client management platform
                  designed to help agencies manage clients, teams, and media in
                  a streamlined way. Building this project as a side venture has
                  allowed me to combine my development skills with product
                  management and entrepreneurship.
                </p>
                <br />
                <p>
                  I am always eager to take on new challenges and continue
                  growing as a developer. Moving forward, I am excited to
                  innovate, collaborate, and make a lasting impact in the
                  ever-evolving world of technology.
                </p>
              </div>

              <div className="mt-5 inline-flex gap-[5px] cursor-pointer">
                <img src={resume} className="inline" />
                <p>Resume(coming soon)</p>
              </div>

              <div className="languages flex flex-wrap gap-[5px] mt-5">
                {languages.map((language) => (
                  <span
                    key={language.name}
                    style={{ backgroundColor: language.color }}
                    className="py-1 px-3 text-white"
                  >
                    {language.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default AboutPage;
