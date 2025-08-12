"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 350) {
          currentSection = section.getAttribute("id") as string;
        }
      });
      console.log("currentSection", currentSection);
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    if (!activeSection) {
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div > <h1 className="font-bold  tracking-tight leading-[48px] text-[#E2E8F0] text-4xl sm:text-5xl ">
          Muhammad Ahad
        </h1>
        <h2 className="font-medium mt-3 text-[#E2E8F0] sm:text-xl text-lg tracking-tight ">
          Software Engineer
        </h2>
        <p className="font-normal text-base leading-normal mt-4 max-w-80 ">
          I design and develop robust, high-performance digital solutions from
          the ground up.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max"
           onClick={(event:React.SyntheticEvent)=>{
            console.log("clicked>>")
            event.preventDefault()
            const target=event.target as HTMLAnchorElement 
            const id= target.getAttribute('href')?.replace('#','')
            const element= document.getElementById(String(id))
            element?.scrollIntoView({
              behavior:'smooth'
            })
          }}
  
          >
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span
                  className={`nav-indicator mr-4 h-px   transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "about"
                      ? "bg-slate-200 w-16"
                      : "bg-slate-600 w-8"
                  }`}
                ></span>
                <span
                  className={`nav-text pointer-events-none text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    activeSection === "about"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 " href="#experience">
                <span
                  className={`nav-indicator mr-4 h-px   transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "experience"
                      ? "bg-slate-200 w-16"
                      : "w-8 bg-slate-600"
                  }`}
                ></span>
                <span
                  className={` nav-text pointer-events-none text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    activeSection === "experience"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 " href="#projects">
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === "projects"
                      ? "bg-slate-200 w-16"
                      : "w-8 bg-slate-600"
                  }`}
                ></span>
                <span
                  className={`nav-text pointer-events-none text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    activeSection === "projects"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <Link className="mr-5 text-xs shrink-0" href={"https://github.com/ahadg"} target="_blank" 

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#8892b0"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </Link>
        <Link className="mr-5 text-xs shrink-0" href={"https://www.linkedin.com/in/muhammad-ahad-87349020a//"} target="_blank" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#8892b0"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
        <Link className="mr-5 text-xs shrink-0" href="mailto:muhmmadahad594@gmail.com" target="_blank">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            role="img"
            fill="#8892b0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
          </svg>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
