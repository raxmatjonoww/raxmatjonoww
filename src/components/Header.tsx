import React, { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Menu, Globe, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Jahongir Raxmatjonov</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="hover:text-primary transition-colors"
              >
                {t(`nav.${item}`)}
              </a>
            ))}

            {/* Language and Theme Switchers */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {['en', 'ru', 'uz'].map((lang) => (
                    <DropdownMenuItem 
                      key={lang} 
                      onClick={() => changeLanguage(lang as Language)}
                    >
                      {t(`language.${lang}`)} {language === lang && '✓'}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {['en', 'ru', 'uz'].map((lang) => (
                  <DropdownMenuItem 
                    key={lang} 
                    onClick={() => changeLanguage(lang as Language)}
                  >
                    {t(`language.${lang}`)} {language === lang && '✓'}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-2"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
