import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiBootstrap,
    SiCss3,
    SiDart,
    SiFlutter,
    SiGit,
    SiGithub,
    SiGooglecolab,
    SiHtml5,
    SiJavascript,
    SiJupyter,
    SiMicrosoftexcel,
    SiMicrosoftoffice,
    SiMicrosoftword,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPython,
    SiScikitlearn,
    SiTensorflow,
    SiTrello,
    SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10">Skills </h2>
      <div className="mt-20">
        <div className="xl:px-60 mx-auto sm:w-full grid grid-cols-4 text-[35px] sm:text-[50px] place-items-center gap-5 sm:gap-20 py-10 ">
          <span className=" hover:text-sky-600 bg_style ">
            <SiPython />
          </span>
          <span className=" hover:text-sky-500 bg_style">
            <SiDart />
          </span>
          <span className=" hover:text-indigo-700 bg_style">
            <SiFlutter />
          </span>
          <span className=" hover:text-orange-600 bg_style">
            <SiHtml5 />
          </span>
          <span className=" hover:text-blue-500 bg_style">
            <SiCss3 />
          </span>
          <span className=" hover:text-yellow-400 bg_style">
            <SiJavascript />
          </span>
          <span className=" hover:text-orange-600 bg_style">
            <SiGit />
          </span>
          <span className=" hover:text-orange-600 bg_style">
            <SiGithub />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiJupyter />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiScikitlearn />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiTensorflow />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiBootstrap />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiPandas />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiNumpy />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiGooglecolab />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiMysql />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiVisualstudiocode />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiTrello />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiAdobepremierepro />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiAdobephotoshop />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiAdobeillustrator />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiMicrosoftoffice />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiMicrosoftword />
          </span>
          <span className=" hover:text-red-500 bg_style">
            <SiMicrosoftexcel />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
