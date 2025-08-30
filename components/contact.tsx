"use client";

import type React from "react";

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation";
import { useState } from "react";
import { sendEmail } from "@/lib/resend";

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

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    try {
      e.preventDefault();
      console.log("Form submitted:", formData);
      await sendEmail(formData.email, formData.name, formData.message);
      alert("Message sent successfully! I'll get back to you within 24 hours.");
    } catch (exception) {
      console.log("Error handling submit", exception);
      alert("Error sending your message, Please try again in a while");
    } finally {
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and collaborate on
            interesting projects.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={100} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                Ready to start something amazing?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm actively looking for entry-level opportunities where I can
                contribute, learn, and grow. Whether it's an internship, junior
                developer role, or freelance project, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">
                  anjalthapa578@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">
                  +977 981 3014613
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">
                  Lalitpur, Nepal
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Follow my journey
              </h4>
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
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-slate-200">
                  Send me a message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  I'll get back to you within 24 hours!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about the opportunity..."
                      rows={5}
                      required
                      className="bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                    disabled={loading}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
