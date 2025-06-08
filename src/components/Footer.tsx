import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from "./ui/Container";
import TriangleOverlay from "./ui/TirangleOverlay";

const Footer = () => {
  return (
    <footer>
      <div className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-black1 bg-center bg-no-repeat h-full bg-cover shadow-lg mt-40 bg-[#23202A] relative">
        <Container>
          <TriangleOverlay />
          <div className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full bg-[#1e1b24] rounded-tr-2xl rounded-br-2xl z-1" />
          <div className="flex flex-wrap text-center md:text-left items-center justify-center md:justify-between py-20">
            <h1 className="text-6xl mb-5 font-bold leading-[1.25] text-white w-full lg:w-7/12">
              Let's make something
              <br /> great together
            </h1>

            <div className="z-1">
              <button className="bg-white px-7 py-3 rounded-full text-black font-bold shadow-sm hover:bg-neutral-100 transition-all">
                <a href="mailto:benjoe.carandang@gmail.com">Send me an email</a>
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10 flex flex-col items-center gap-5">
          <div className="text-neutral-400 text-3xl flex gap-5">
            <a
              className="hover:text-white transition-all"
              href="https://www.facebook.com/carandang.benjoe/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:text-white transition-all"
              href="https://twitter.com/bnjcrndng"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-white transition-all"
              href="https://github.com/benjoecarandang"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-white transition-all"
              href="https://www.linkedin.com/in/benjoe-carandang-8021281a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
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
