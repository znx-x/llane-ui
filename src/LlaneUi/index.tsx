import React, { useState, createContext, useContext, useMemo, ReactNode } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { ThemeToggleButton } from '../Toggle';

// Define the default themes
const defaultLightTheme: DefaultTheme = {
    mode: 'light'
};
const defaultDarkTheme: DefaultTheme = {
    mode: 'dark'
};

interface ThemeContextType {
    toggleTheme: () => void;
}

// Create a context for toggling the theme
const ThemeToggleContext = createContext<ThemeContextType>({ toggleTheme: () => {} });

export const useThemeToggle = () => useContext(ThemeToggleContext);

interface LlaneUiProps {
    children: ReactNode;
}

export const LlaneUi: React.FC<LlaneUiProps> = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>(defaultLightTheme);

    const toggleTheme = () => {
        setTheme(theme.mode === 'dark' ? defaultLightTheme : defaultDarkTheme);
    };

    const providerValue = useMemo(() => ({ toggleTheme }), [toggleTheme]);

    return (
        <ThemeToggleContext.Provider value={providerValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export default LlaneUi;

// Export the ThemeToggle component
export const ThemeToggle = () => {
    const { toggleTheme } = useThemeToggle();
    return <ThemeToggleButton onClick={toggleTheme} />;
  };