import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center skyline-bg"
    >
      <div className="absolute inset-0 hero-flag-overlay"></div>

      {/* Animated Flag Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="flag-stars absolute top-10 right-10 z-10 animate-pulse">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="star m-2 inline-block"></div>
          ))}
        </div>
        <div className="flag-stripe absolute left-0 h-8 bg-americano-red animate-fade-in" style={{ top: '10%', width: '100%', opacity: 0.3 }}></div>
        <div className="flag-stripe absolute left-0 h-8 bg-white animate-fade-in" style={{ top: '20%', width: '100%', opacity: 0.3 }}></div>
        <div className="flag-stripe absolute left-0 h-8 bg-americano-red animate-fade-in" style={{ top: '30%', width: '100%', opacity: 0.3 }}></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-white text-center">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
          <img
            src="/lovable-uploads/310ba13f-a404-48c2-b467-cd92ae71ad1c.png"
            alt="Jahongir Raxmatjonov"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full py-6">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-2 bg-americano-red"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Jahongir Raxmatjonov
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Full-Stack Developer
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              className="bg-americano-red hover:bg-americano-red/90 text-white"
              size="lg"
            >
              <Download className="mr-2" /> Download CV
            </Button>
            <Button
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/20"
              size="lg"
              asChild
            >
              <a href="#about">
                Learn More <ChevronDown className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;