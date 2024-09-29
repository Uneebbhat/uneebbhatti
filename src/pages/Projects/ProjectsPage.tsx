import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clientflow from "@/assets/clientflow.svg";
import coinbounce from "@/assets/coinbounce.jpg";
import tokentalent from "@/assets/tokentalent.png";

const ProjectsPage: FC = () => {
  const porjects = [
    {
      name: "ClientFlow",
      logo: clientflow,
      description:
        "ClientFlow is an all-in-one SaaS platform that enables businesses, freelancers, and agencies to manage clients, collaborate with teams, and track projects through integrated tools like chat, Kanban boards, and cloud storage.",
    },
    {
      name: "Coinbounce",
      logo: coinbounce,
      description:
        "Coinbounce is a dynamic blogging platform for cryptocurrency enthusiasts to share insights and market analysis, featuring an intuitive interface for creating posts and integrating real-time crypto data for enhanced engagement.",
    },
    {
      name: "TokenTalentHR",
      logo: tokentalent,
      description:
        "TokentalentHR is a mobile app that simplifies employee attendance and leave management, allowing users to mark attendance, apply for leaves, and view payrolls with a user-friendly interface and real-time updates.",
    },
  ];
  return (
    <>
      <MainLayout>
        <PageLayout title="Projects" emoji="🛠️">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[30px]">
            {porjects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <img src={project.logo} alt={project.name} width={40} />
                    <CardTitle className="text-[18px] font-bold">
                      {project.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default ProjectsPage;
