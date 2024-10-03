import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import myImg from "@/assets/uneeb.jpg";
import resume from "@/assets/resume.svg";
import { Link } from "react-router-dom";

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
    {
      name: "Cloudinary",
      color: "#61dbfb",
    },
  ];

  return (
    <>
      <MainLayout>
        <PageLayout title={"About"} emoji="📖">
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
                  In addition to my internships, I am currently working on my
                  startup, <span className="font-bold">ClientFlow</span>, a
                  client management platform aimed at helping businesses,
                  freelancers, and agencies efficiently manage clients, teams,
                  and media in a streamlined manner. Developing this project has
                  allowed me to merge my technical development skills with my
                  growing interest in product management and entrepreneurship.
                  This journey is not only sharpening my expertise in building
                  scalable solutions but also giving me valuable insights into
                  the challenges of running a tech-driven business.
                </p>
                <br />
                <p>
                  Currently, I am expanding my skill set by learning{" "}
                  <span className="font-bold">Next.js</span> and{" "}
                  <span className="font-bold">TypeScript</span>, technologies
                  that are enhancing my ability to build scalable and
                  maintainable web applications. This ongoing learning allows me
                  to stay at the forefront of modern web development.
                </p>
                <br />
                <p>
                  I have recently embarked on my freelancing journey on
                  platforms like <span className="font-bold">Upwork</span>,
                  where I'm taking on exciting projects that not only refine my
                  skills but also broaden my professional experience. If you're
                  interested in collaborating, feel free to explore my profile
                  and see how we can work together!{" "}
                  <Link
                    to="https://www.upwork.com/freelancers/uneeb?mp_source=share"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Check out my Upwork profile here!
                  </Link>
                </p>
                <br />
                <p>
                  I am always eager to take on new challenges and continue
                  growing as a developer. Moving forward, I am excited to
                  innovate, collaborate, and make a lasting impact in the
                  ever-evolving world of technology.
                </p>

                <br />
                <h2 className="heading text-2xl underline">
                  Expanding a Family Legacy
                </h2>
                <p>
                  In addition to my work as a developer, I’m deeply involved in
                  my family’s printing press business, which has been thriving
                  for over 40 years under the leadership of my father. Our
                  printing press has earned a reputation for quality and
                  reliability in the local market, providing a wide range of
                  printing services.
                </p>
                <br />
                <p>
                  As the next generation, I’m excited to take on the challenge
                  of expanding our business into the digital space. By bringing
                  our services online, I aim to reach a broader audience and
                  continue the legacy my father has built, while integrating
                  modern technology to streamline operations and enhance
                  customer experiences.
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
