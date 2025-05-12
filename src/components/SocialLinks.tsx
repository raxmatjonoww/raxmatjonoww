
import { Github, Instagram, Linkedin } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
};

const SocialLinks = ({ className = "", iconSize = 20, vertical = false }: SocialLinksProps) => {
  const links = [
    {
      name: "Telegram",
      url: "https://t.me/raxmatjonoww",
      icon: <FaTelegram size={iconSize} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/raxmatjonoww",
      icon: <Instagram size={iconSize} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/raxmatjonoww",
      icon: <Github size={iconSize} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jahongir-raxmatjonov-5a5743342/",
      icon: <Linkedin size={iconSize} />,
    },
  ];

  return (
    <div
      className={`flex ${
        vertical ? "flex-col space-y-4" : "flex-row space-x-4"
      } ${className}`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-americano-gray hover:text-americano-blue transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
