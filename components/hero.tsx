import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import pfp from "@/assets/public/Denim.png";

const Hero = () => {
  function AnimatedSection({
    children,
    className = "",
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <AnimatedSection className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Anjal Thapa
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300">
                Aspiring Full Stack Developer
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Freshmen passionate about creating innovative web solutions. I
                love turning ideas into reality through clean code and modern
                design principles.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent cursor-pointer"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/AnjalDevJr", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/anjal-thapa-6b72842a1/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer"
                onClick={() =>
                  window.open("https://mail.google.com/", "_blank")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection
            delay={200}
            className="relative flex justify-center items-center"
          >
            <div
              className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden"
              style={{ width: "70%", height: "70%" }}
            >
              <Image
                src={pfp}
                alt="Profile"
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
