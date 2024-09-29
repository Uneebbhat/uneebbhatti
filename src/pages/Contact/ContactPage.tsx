import MainLayout from "@/layout/MainLayout";
import PageLayout from "@/layout/PageLayout";
import { FC } from "react";
import { Link } from "react-router-dom";

const ContactPage: FC = () => {
  return (
    <>
      <MainLayout>
        <PageLayout title="Contact" emoji="📧">
          <div>
            <p>
              Have a project idea? Looking to collaborate, or just want to chat?
              Don't hesitate to reach out via email at {""}
              <Link
                to="mailto:uneebbhatti3@gmail.com"
                className="font-bold underline"
              >
                📧uneebbhatti3@gmail.com
              </Link>{" "}
              or on WhatsApp at {""}
              <Link
                to="https://wa.me/923364769000"
                target="_blank"
                className="font-bold underline"
              >
                📞+923364769000!
              </Link>
            </p>
          </div>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default ContactPage;
