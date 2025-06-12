import LaravelLogo from "@/assets/laravel.svg";
import TailwindLogo from "@/assets/tailwind.svg";
import BootstrapLogo from "@/assets/bootstrap.png";
import CssLogo from "@/assets/css.svg";
import JavascriptLogo from "@/assets/javascript.svg";
import PhpLogo from "@/assets/php.svg";
import HtmlLogo from "@/assets/html.svg";
import GitLogo from "@/assets/git.svg";
import MysqlLogo from "@/assets/mysql.svg";
import WordpressLogo from "@/assets/wordpress-white.svg";
import JavaLogo from "@/assets/java.svg";
import TypescriptLogo from "@/assets/typescript.png";


type Technology = {
  name: string;
  icon: string;
};

export const technologyData: Technology[] = [
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
  { name: "Java", icon: JavaLogo },
  { name: "Typescript", icon: TypescriptLogo }
];
