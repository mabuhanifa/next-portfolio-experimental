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
        <div className="xl:px-60 mx-auto sm:w-full grid grid-cols-4 text-6xl sm:text-[50px] place-items-center gap-10 sm:gap-20 py-10">
          <span className=" hover:text-sky-600">
            <SiPython />
          </span>
          <span className=" hover:text-sky-500">
            <SiDart />
          </span>
          <span className=" hover:text-indigo-700">
            <SiFlutter />
          </span>
          <span className=" hover:text-orange-600">
            <SiHtml5 />
          </span>
          <span className=" hover:text-blue-500">
            <SiCss3 />
          </span>
          <span className=" hover:text-yellow-400">
            <SiJavascript />
          </span>
          <span className=" hover:text-orange-600">
            <SiGit />
          </span>
          <span className=" hover:text-orange-600">
            <SiGithub />
          </span>
          <span className=" hover:text-red-500">
            <SiJupyter />
          </span>
          <span className=" hover:text-red-500">
            <SiScikitlearn />
          </span>
          <span className=" hover:text-red-500">
            <SiTensorflow />
          </span>
          <span className=" hover:text-red-500">
            <SiBootstrap />
          </span>
          <span className=" hover:text-red-500">
            <SiPandas />
          </span>
          <span className=" hover:text-red-500">
            <SiNumpy />
          </span>
          <span className=" hover:text-red-500">
            <SiGooglecolab />
          </span>
          <span className=" hover:text-red-500">
            <SiMysql />
          </span>
          <span className=" hover:text-red-500">
            <SiVisualstudiocode />
          </span>
          <span className=" hover:text-red-500">
            <SiTrello />
          </span>
          <span className=" hover:text-red-500">
            <SiAdobepremierepro />
          </span>
          <span className=" hover:text-red-500">
            <SiAdobephotoshop />
          </span>
          <span className=" hover:text-red-500">
            <SiAdobeillustrator />
          </span>
          <span className=" hover:text-red-500">
            <SiMicrosoftoffice />
          </span>
          <span className=" hover:text-red-500">
            <SiMicrosoftword />
          </span>
          <span className=" hover:text-red-500">
            <SiMicrosoftexcel />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
