import Container from "./Container";
import Logo from "../../assets/logo.png";
import { cn } from "../../lib/utils/cn";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Case study", href: "/case-study" }
];

const Navbar = () => {
  const [active, setActive] = useState("/");

  return (
    <header className="mx-4">
      <nav>
        <Container>
          <div className="relative flex items-center justify-between h-24">
            <div className="flex-1 flex items-center justify-stretch">
              <div className="flex-shrink-0 flex justify-between items-center w-full">
                <img
                  className="block h-14 md:h-16 w-auto invert z-10 animate-[spin_5s_ease-in-out_infinite]"
                  src={Logo}
                  alt="Workflow"
                />

                <div className="flex items-center gap-6 p-4 rounded-full text-sm font-medium">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => setActive(item.href)}
                      className={cn(
                        "py-2 px-4 rounded-full transition-colors cursor-pointer",
                        active === item.href
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:text-white/90"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button className="w-32 bg-white px-7 py-3 rounded-full text-black font-bold shadow-sm">
                  <a href="mailto:benjoe.carandang@gmail.com">Let's talk</a>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
