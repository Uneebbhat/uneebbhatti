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
              Do you have a project idea or want to collaborate? 🤝 I would love
              to hear from you! Feel free to reach out via email at {""}
              <Link
                to="mailto:uneebbhatti3@gmail.com"
                className="font-bold underline"
              >
                📧 uneebbhatti3@gmail.com
              </Link>{" "}
              or connect with me on WhatsApp at {""}
              <Link
                to="https://wa.me/923364769000"
                target="_blank"
                className="font-bold underline"
              >
                📞 +923364769000
              </Link>
              . You can also hire me on Upwork by visiting my profile here: {""}
              <Link
                to="https://www.upwork.com/freelancers/~013bf01b3e28523db1?viewMode=1"
                target="_blank"
                className="font-bold underline"
              >
                💼 Uneeb Bhatti
              </Link>
              .
            </p>
          </div>
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default ContactPage;
