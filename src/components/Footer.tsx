import Container from "./ui/Container";
import Contact from "@/features/Contact/Contact";

const Footer = () => {
  return (
    <footer id="get-in-touch">
      <div className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-black1 bg-center bg-no-repeat h-full bg-cover shadow-lg mt-10 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5">
        <Container>
          <Contact />
        </Container>
      </div>

      <Container>
        <div className="py-10 flex flex-col items-center gap-5">
          <div className="text-neutral-400 text-sm text-center md:text-center">
            Build using React with TypeScript & Tailwind CSS © Benjoe Oates
            Carandang
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
