import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, Terminal, Code, Database } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Designing Scalable, Reliable Backend Systems with Java & SpringBoot";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="fade-in-up mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              Open for Opportunities
            </Badge>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up code-font">
            <span className="gradient-text">Debika Basu</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up code-font">
            Backend Software Engineer @ 6Livo Technologies
          </h2>

          {/* Typing Animation Headline */}
          <div className="mb-12 fade-in-up">
            <p className="text-lg md:text-xl text-foreground/80 min-h-[3rem] flex items-center justify-center">
              <span className="font-medium">{typedText}</span>
              <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse"></span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button size="lg" className="btn-gradient px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 fade-in-up">
            <a 
              href="https://github.com/debikabasu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/debika-basu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:debika.basu@email.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;