import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation";
import animoc from "../assets/public/animoc-studio.png";
import weather from "../assets/public/weather-app.png";
import portfolio from "../assets/public/next-portfolio.png";

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

const Project = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some projects I've built while learning and exploring
            different technologies.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={100}>
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20 dark:border-white/10">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={animoc}
                  alt="Ecommerce website"
                  width={300}
                  height={200}
                  className="object-fit w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-slate-200">
                  Graphic Design Ecommerce
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  A fully responsive fullstack website for graphic design sales
                  with the MERN stack.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-green-300 text-green-700 dark:border-green-700 dark:text-green-300"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-red-300 text-red-700 dark:border-red-700 dark:text-red-300"
                  >
                    Express.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
                  >
                    Node.js
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 bg-transparent cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://github.com/AnjalDevJr/animoc-studio-fe",
                        "_blank"
                      )
                    }
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20 dark:border-white/10">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={weather}
                  alt="Weather App"
                  width={300}
                  height={200}
                  className="object-fit w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-slate-200">
                  Weather Forecast App
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  A responsive weather app with location-based forecasts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-indigo-300 text-indigo-700 dark:border-indigo-700 dark:text-indigo-300"
                  >
                    CSS3
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-red-300 text-red-700 dark:border-red-700 dark:text-red-300"
                  >
                    OpenWeather API
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 bg-transparent cursor-pointer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20 dark:border-white/10">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={portfolio}
                  alt="Portfolio Website"
                  width={300}
                  height={200}
                  className="object-fit w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-slate-200">
                  Personal Portfolio
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  A responsive portfolio website showcasing my projects and
                  skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="border-teal-300 text-teal-700 dark:border-teal-700 dark:text-teal-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-pink-300 text-pink-700 dark:border-pink-700 dark:text-pink-300"
                  >
                    Tailwind
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 bg-transparent cursor-pointer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 cursor-pointer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent cursor-pointer"
            onClick={() =>
              window.open("https://github.com/AnjalDevJr", "_blank")
            }
          >
            View All Projects on GitHub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Project;
