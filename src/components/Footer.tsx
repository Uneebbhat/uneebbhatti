import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[30px] p-4">
        <Link to="mailto:uneebbhatti3@gmail.com">
          <Mail size={24} className="cursor-pointer" />
        </Link>
        <Link to="https://github.com/Uneebbhat" target="_blank">
          <Github size={24} className="cursor-pointer" />
        </Link>
        <Link to="https://www.linkedin.com/in/uneeb-bhatti/" target="_blank">
          <Linkedin size={24} className="cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
