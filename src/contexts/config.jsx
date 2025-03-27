import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const ConfigContext = createContext();

// Provider do contexto
export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    id: 1,
    title: "Wescley Andrade",
    description: "Meu portfólio",
    name: "Wescley",
    label: "Desenvolvedor analista de sistemas",
    presentation: null,
    about: null,
    contact: "contact ok 2",
    github: null,
    youtube: null,
    linkedin: null,
    deepseek: null,
    iaName: null,
    theme: null,
    metrics: [],
    history: []
  });

  // Atualiza configurações do MySQL
  const updateMySQLConfig = (newConfig) => {
    setConfig(prev => ({
      ...prev,
      mysqlConfig: {
        ...prev.mysqlConfig,
        ...newConfig
      }
    }));
  };


  return (
    <ConfigContext.Provider
      value={{
        config,
        setConfig
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useMySQLConfig must be used within a MySQLConfigProvider');
  }
  return context;
};