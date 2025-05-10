
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Full Stack Developer',
      description: 'Passionate about creating efficient, scalable, and user-friendly web applications.'
    },
    about: {
      title: 'About Me',
      description: "I'm a Full Stack Developer with expertise in both frontend and backend technologies. I'm passionate about building robust applications and constantly learning new technologies to enhance my skill set."
    },
    skills: {
      title: 'My Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools'
    },
    projects: {
      title: 'Projects',
      viewLive: 'View Live',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      phone: 'Phone',
      social: 'Social Media'
    },
    theme: {
      dark: 'Dark Mode',
      light: 'Light Mode'
    },
    language: 'Language'
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      greeting: 'Привет, я',
      role: 'Full Stack разработчик',
      description: 'Увлечен созданием эффективных, масштабируемых и удобных веб-приложений.'
    },
    about: {
      title: 'Обо мне',
      description: 'Я Full Stack разработчик с опытом работы как с фронтенд, так и с бэкенд технологиями. Я увлечен созданием надежных приложений и постоянно изучаю новые технологии для расширения своих навыков.'
    },
    skills: {
      title: 'Мои навыки',
      frontend: 'Фронтенд',
      backend: 'Бэкенд',
      database: 'Базы данных',
      tools: 'Инструменты'
    },
    projects: {
      title: 'Проекты',
      viewLive: 'Смотреть демо',
      viewCode: 'Смотреть код'
    },
    contact: {
      title: 'Связаться со мной',
      name: 'Имя',
      email: 'Электронная почта',
      message: 'Сообщение',
      send: 'Отправить сообщение',
      phone: 'Телефон',
      social: 'Социальные сети'
    },
    theme: {
      dark: 'Темная тема',
      light: 'Светлая тема'
    },
    language: 'Язык'
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      skills: "Ko'nikmalar",
      projects: 'Loyihalar',
      contact: 'Aloqa'
    },
    hero: {
      greeting: 'Salom, men',
      role: 'Full Stack Dasturchi',
      description: "Samarali, kengaytiriladigan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ishtiyoqim baland."
    },
    about: {
      title: 'Men haqimda',
      description: "Men frontend va backend texnologiyalari bо'yicha tajribaga ega Full Stack dasturchiman. Men ishonchli ilovalarni yaratishga ishtiyoqli va o'z mahoratimni oshirish uchun doimiy ravishda yangi texnologiyalarni o'rganyapman."
    },
    skills: {
      title: "Ko'nikmalarim",
      frontend: 'Frontend',
      backend: 'Backend',
      database: "Ma'lumotlar bazasi",
      tools: 'Vositalar'
    },
    projects: {
      title: 'Loyihalar',
      viewLive: 'Jonli ko\'rish',
      viewCode: 'Kodni ko\'rish'
    },
    contact: {
      title: 'Men bilan bog\'laning',
      name: 'Ism',
      email: 'Email',
      message: 'Xabar',
      send: 'Xabar yuborish',
      phone: 'Telefon',
      social: 'Ijtimoiy tarmoqlar'
    },
    theme: {
      dark: 'Qorong\'i rejim',
      light: 'Yorqin rejim'
    },
    language: 'Til'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
