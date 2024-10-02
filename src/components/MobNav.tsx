import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobNav = () => {
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
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <nav className="navbar flex flex-col items-center mt-[50px]">
            {routes.map((route) => (
              <Link to={route.route} key={route.route} className="w-full">
                <Button
                  variant={
                    route.route === location.pathname ? "default" : "ghost"
                  }
                  className="w-full"
                >
                  {route.label}
                </Button>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobNav;
