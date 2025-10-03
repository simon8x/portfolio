import { createContext} from 'react';

export const LanguageContext = createContext();

// 1. Crear el contexto

// 2. Crear el Provider
// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('EN');

//   const toggleLanguage = () => {
//     setLanguage(prev => (prev === 'EN' ? 'ES' : 'EN'));
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// 3. Hook personalizado para consumirlo más fácil
// export const useLanguage = () => useContext(LanguageContext);