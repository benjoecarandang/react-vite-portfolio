import Container from "./ui/Container";
import SectionHeadings from "./ui/SectionHeadings";

import LaravelLogo from "../assets/laravel.svg";
import TailwindLogo from "../assets/tailwind.svg";
import BootstrapLogo from "../assets/bootstrap.png";
import CssLogo from "../assets/css.svg";
import JavascriptLogo from "../assets/javascript.svg";
import PhpLogo from "../assets/php.svg";
import HtmlLogo from "../assets/html.svg";
import GitLogo from "../assets/git.svg";
import MysqlLogo from "../assets/mysql.svg";
import WordpressLogo from "../assets/wordpress-white.svg";
import JavaLogo from "../assets/java.svg";
import TriangleBackground from "./ui/TriangleBackground";

const techStack = [
  { name: "Laravel", icon: LaravelLogo },
  { name: "Tailwind", icon: TailwindLogo },
  { name: "Bootstrap", icon: BootstrapLogo },
  { name: "CSS", icon: CssLogo },
  { name: "Javascript", icon: JavascriptLogo },
  { name: "PHP", icon: PhpLogo },
  { name: "HTML", icon: HtmlLogo },
  { name: "Git", icon: GitLogo },
  { name: "MySQL", icon: MysqlLogo },
  { name: "Wordpress", icon: WordpressLogo },
  { name: "Java", icon: JavaLogo }
];

const AboutMe = () => {
  return (
    <>
      <section id="about-me" className="pt-20 pb-10 m-w-5xl">
        <div>
          <Container className="max-w-5xl">
            <SectionHeadings
              tagline="Technology"
              title="Trusted by the best companies in the business."
              description={[]}
              textEnder="I take pride in showcasing my comprehensive knowledge and expertise in web development, utilizing a wide range of modern tools and technologies to deliver high-quality solutions."
            />

            <div className="flex justify-center flex-wrap gap-3 p-4 rounded-xl">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-[#23202a] text-white rounded-lg text-sm font-medium"
                >
                  <img src={tech.icon} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
      <div className="h-48 relative">
        <TriangleBackground bgColor="#1e1b24" />
      </div>
    </>
  );
};

export default AboutMe;
