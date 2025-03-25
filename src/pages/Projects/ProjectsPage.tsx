import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import agencio from "@/assets/agencio.png";
import coinbounce from "@/assets/coinbounce.jpg";
import tokentalent from "@/assets/tokentalent.png";
import almTraders from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Define colors for each tag
const tagColors: Record<string, string> = {
  React: "#61dbfb",
  MongoDB: "#3fa037",
  JavaScript: "#f7df1e",
  TypeScript: "#264de4",
  HTML: "#e34c26",
  CSS: "#264de4",
  Express: "#f7df1e",
  NodeJS: "#3c873a",
  Git: "#ef5b25",
  TailwindCSS: "#61dbfb",
  ShadcnUI: "#61dbfb",
  NextJs: "#0A0A0A",
};

interface Projects {
  name: string;
  logo: string;
  description: string;
  tags: string[];
}

const projects: Projects[] = [
  {
    name: "Agencio",
    logo: agencio,
    description:
      "Agencio is an all-in-one agency management platform designed for businesses, freelancers, and teams to streamline client interactions, project tracking, and file management.",
    tags: [
      "React",
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Express",
      "MongoDB",
      "NodeJS",
    ],
  },
  {
    name: "TokenTalentHR",
    logo: tokentalent,
    description:
      "TokentalentHR is a mobile app that simplifies employee attendance and leave management, allowing users to mark attendance, apply for leaves, and view payrolls with a user-friendly interface.",
    tags: ["JavaScript", "Express", "MongoDB", "NodeJS"],
  },
  {
    name: "AlmTraders",
    logo: almTraders,
    description:
      "I built the AlmTraders website using TypeScript, React, NextJs, and TailwindCSS to showcase their 30+ years of expertise in wholesale IT trading and global exports.",
    tags: ["React", "NextJs", "TypeScript", "TailwindCSS"],
  },
  {
    name: "Coinbounce",
    logo: coinbounce,
    description:
      "Coinbounce is a blogging platform for cryptocurrency enthusiasts to share insights and market analysis, featuring an intuitive interface and real-time crypto data integration.",
    tags: ["React", "NextJs", "TypeScript", "TailwindCSS"],
  },
];

const ProjectsPage: FC = () => {
  return (
    <MainLayout>
      <PageLayout title="Projects" emoji="🛠️">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <Card key={project.name} className="p-4">
              <CardHeader>
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-20 h-20 mx-auto"
                />
                <CardTitle className="text-center mt-4">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
                {/* Tag Section */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: tagColors[tag],
                      }}
                      className="py-1 px-3 text-white rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageLayout>
    </MainLayout>
  );
};

export default ProjectsPage;
