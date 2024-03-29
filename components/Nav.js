import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="px-10 md:px-20 lg:px-28 ">
      <Head>
        <title>Md. Rezuwan Hassan</title>
      </Head>
      <nav className="flex flex-col md:flex-row justify-between font-semibold">
        <div className="my-10">
          <div className="flex justify-between items-center">
            <Link href={"/"}>Rezuwan Hassan</Link>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <AiOutlineMenu className="text-xl" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            "hidden md:flex flex-col md:flex-row justify-between items-center gap-10 font-light"
          }
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={themeChanger}
          >
            {theme === "dark" ? (
              <BsSun className="inline text-xl" />
            ) : (
              <FaMoon className="inline text-xl" />
            )}
          </div>
        </div>
        <div
          className={
            menu
              ? "md:hidden flex flex-col md:flex-row justify-between items-center gap-10 font-light"
              : "hidden"
          }
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={themeChanger}
          >
            {theme === "dark" ? (
              <BsSun className="inline text-xl" />
            ) : (
              <FaMoon className="inline text-xl" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}