import { createContext } from "react";

export const LanguageContext = createContext({
  language: "en",
  toggleLanguege: () => {},
});

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const translations = {
  en: {
    welcome: "Welcome",
    profile: "Your profile",
    color: "Change theme",
    text: "Change language",
  },
  ru: {
    welcome: "Добро пожаловать",
    profile: "Твой профиль",
    color: "Сменить тему",
    text: "Сменить язык",
  },
  de: {
    welcome: "Willkommen",
    profile: "Dein Profil",
    color: "Thema ändern",
    text: "Sprache ändern",
  },
  es: {
    welcome: "Bienvenido",
    profile: "Tu perfil",
    color: "Cambiar de tema",
    text: "Cambiar idioma",
  },
};
