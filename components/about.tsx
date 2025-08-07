import type React from "react";

import { Code, Palette, Smartphone, Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation";
useScrollAnimation;

const About = () => {
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

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A passionate learner on a journey to become a skilled developer,
            eager to contribute to innovative projects.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={100} className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I'm a freshman in college, currently pursuing a Bachelor's in
              Computing with a focus on Artificial Intelligence. Eager to dive
              into the world of fullstack development, I'm building a strong
              foundation in both frontend and backend technologies.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I am passionate about continuous learning and excited to explore
              how AI can enhance web applications. My goal is to create
              impactful digital solutions while growing as a fullstack
              developer.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
                  >
                    Tailwind
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Express
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    MongoDB
                  </Badge>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200} className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                  10+
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  Projects Built
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Palette className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                  7+
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  Technologies
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
                  100%
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Dedication
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
                  Mobile
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  First Design
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
