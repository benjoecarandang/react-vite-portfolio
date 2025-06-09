import { NavLink } from "react-router-dom";
import Container from "@/components/ui/Container";
import Logo from "@/assets/logo.png";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Case study", href: "/case-study" }
];

const Navbar = () => {
  return (
    <header className="mx-4">
      <nav>
        <Container>
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-stretch">
              <div className="flex-shrink-0 flex justify-between items-center w-full">
                <NavLink to="/">
                  <img
                    className="block h-14 md:h-16 w-auto invert z-10 animate-[spin_5s_ease-in-out_infinite]"
                    src={Logo}
                    alt="Website Logo"
                  />
                </NavLink>

                <div className="flex items-center gap-6 p-4 rounded-full text-sm font-medium">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "py-2 px-4 rounded-full transition-colors",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:text-white/90"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                <a
                  href="mailto:benjoe.carandang@gmail.com"
                  className="w-32 bg-white px-7 py-3 rounded-full text-black font-bold shadow-sm text-center"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
