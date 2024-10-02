import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const routes = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Projects",
      route: "/projects",
    },
    {
      label: "Printing Business",
      route: "/printing-projects",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ];
  return (
    <>
      <header className="flex items-center justify-end py-[15px] px-[15px]">
        <nav className="navbar hidden md:flex">
          {routes.map((route) => (
            <Link to={route.route} key={route.route}>
              <Button
                variant={
                  route.route === location.pathname ? "default" : "ghost"
                }
              >
                {route.label}
              </Button>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
