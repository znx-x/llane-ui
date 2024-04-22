import React, { useState, createContext, useContext, useMemo, ReactNode, useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
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

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme.mode === 'dark' ? defaultLightTheme : defaultDarkTheme);
    }, []);
    

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