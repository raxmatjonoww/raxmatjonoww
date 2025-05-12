
import { Flag, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-americano-red"></div>
                <img
                  src="/lovable-uploads/310ba13f-a404-48c2-b467-cd92ae71ad1c.png"
                  alt="Jahongir Raxmatjonov"
                  className="w-full relative z-10"
                />
              </div>
              <div className="mt-6 flex items-center">
                <MapPin className="mr-2 text-americano-red" size={18} />
                <span>New York, USA</span>
              </div>
              <div className="mt-2 flex items-center">
                <Flag className="mr-2 text-americano-blue" size={18} />
                <span>Full-Stack Developer</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                I'm a passionate Full-Stack Developer
              </h3>
              <p className="text-gray-700 mb-4">
                Specializing in building exceptional digital experiences. With a
                focus on creating elegant, efficient, and user-centered
                applications, I bring ideas to life through clean code and
                thoughtful design.
              </p>
              <p className="text-gray-700 mb-6">
                My expertise spans both frontend and backend technologies,
                allowing me to create comprehensive solutions that deliver real
                value. I'm constantly exploring new technologies and approaches
                to stay at the cutting edge of web development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Contact Details</h4>
                  <p className="text-gray-700">
                    Phone: <a href="tel:+998908257503">+998 90 825 7503</a>
                  </p>
                  <p className="text-gray-700">
                    Telegram:{" "}
                    <a
                      href="https://t.me/raxmatjonoww"
                      className="text-americano-blue"
                    >
                      @raxmatjonoww
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Social Media</h4>
                  <p className="text-gray-700">
                    Instagram:{" "}
                    <a
                      href="https://instagram.com/raxmatjonoww"
                      className="text-americano-blue"
                    >
                      @raxmatjonoww
                    </a>
                  </p>
                  <p className="text-gray-700">
                    GitHub:{" "}
                    <a
                      href="https://github.com/raxmatjonoww"
                      className="text-americano-blue"
                    >
                      raxmatjonoww
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
