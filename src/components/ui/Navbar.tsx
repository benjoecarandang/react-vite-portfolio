import Container from "./Container";
import Logo from "../../assets/logo.png";

const Navbar = () => {
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
