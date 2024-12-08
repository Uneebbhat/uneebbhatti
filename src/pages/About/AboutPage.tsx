import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import myImg from "@/assets/uneeb.jpg";
import resume from "@/assets/resume.svg";

const AboutPage: FC = () => {
  const languages = [
    { name: "React", color: "#61dbfb" },
    { name: "MongoDb", color: "#3fa037" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#264de4" },
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#264de4" },
    { name: "Express", color: "#f7df1e" },
    { name: "Node", color: "#3c873a" },
    { name: "Git", color: "#ef5b25" },
    { name: "Figma", color: "#a259ff" },
    { name: "Illustrator", color: "#340100" },
    { name: "Photoshop", color: "#001e36" },
    { name: "Postman", color: "#e34c26" },
    { name: "Github", color: "#171515" },
    { name: "TailwindCSS", color: "#61dbfb" },
    { name: "Cloudinary", color: "#61dbfb" },
  ];

  return (
    <MainLayout>
      <PageLayout title="About" emoji="📖">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="left w-full md:w-1/4 text-center p-4">
            <img
              src={myImg}
              alt="Uneeb Bhatti"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="heading mt-4 text-2xl font-bold">Uneeb Bhatti</h3>
            <p className="text-sm text-gray-600">Full-stack Developer</p>
          </div>

          {/* Right Section */}
          <div className="right w-full md:w-3/4 p-4">
            <section>
              <h2 className="font-bold text-lg">Hello, Everyone! 👋</h2>
              <p className="mt-4">
                I am a passionate full-stack web developer specializing in
                seamlessly blending front-end design with back-end functionality
                to deliver intuitive and impactful user experiences. My
                expertise lies in navigating client and server-side
                technologies, crafting robust and scalable solutions that drive
                innovation in the digital world.
              </p>
              <p className="mt-4">
                Currently, I am pursuing a{" "}
                <span className="font-bold">
                  Bachelor of Science in Information Technology
                </span>{" "}
                (BSIT) at the{" "}
                <span className="font-bold">
                  University of Management and Technology
                </span>{" "}
                (UMT). Alongside my studies, I am mastering the MERN stack,
                Next.js, and TypeScript, while staying updated with the latest
                trends in web development.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="heading text-2xl underline">
                Professional Journey
              </h2>
              <p className="mt-4">
                My journey in tech began with a front-end development internship
                at <span className="font-bold">Concypt</span> (June–August
                2023), where I worked on real-world projects and refined my
                skills in front-end technologies.
              </p>
              <p className="mt-4">
                Later, I joined <span className="font-bold">TokenTalentHR</span>{" "}
                (August 21–September 19, 2024) as a back-end developer intern.
                This role deepened my expertise in server-side technologies and
                mobile app back-end development.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="heading text-2xl underline">
                Entrepreneurship with Codemaven Solution
              </h2>
              <p className="mt-4">
                As the founder of{" "}
                <span className="font-bold">Codemaven Solution</span>, I lead a
                software company specializing in crafting innovative web
                applications tailored for businesses. This entrepreneurial
                journey has enhanced my technical skills and taught me product
                management and client collaboration.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="heading text-2xl underline">
                Building ClientFlow
              </h2>
              <p className="mt-4">
                Alongside Codemaven, I am building{" "}
                <span className="font-bold">ClientFlow</span>, a client
                management platform for businesses, freelancers, and agencies.
                Featuring team management, media storage, and a Kanban board for
                project tracking, ClientFlow is a testament to my
                entrepreneurial vision and technical acumen.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="heading text-2xl underline">
                Expanding a Family Legacy
              </h2>
              <p className="mt-4">
                I am also working to modernize our family’s 40-year-old printing
                press business by introducing digital solutions to reach a
                broader audience and enhance customer experience.
              </p>
            </section>

            {/* Resume Section */}
            <div className="mt-8 inline-flex gap-3 items-center cursor-pointer">
              <img src={resume} alt="Resume icon" className="h-6 w-6" />
              <p className="text-gray-600">Resume (coming soon)</p>
            </div>

            {/* Languages Section */}
            <div className="languages flex flex-wrap gap-2 mt-6">
              {languages.map((language) => (
                <span
                  key={language.name}
                  style={{ backgroundColor: language.color }}
                  className="py-1 px-3 text-white rounded-md text-sm"
                >
                  {language.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </MainLayout>
  );
};

export default AboutPage;
