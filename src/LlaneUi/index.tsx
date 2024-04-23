import React, { useState, createContext, useContext, useMemo, ReactNode, useCallback } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { AppBackground, ComponentBackground, BorderColor, TextColor } from '../Colors';

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.mode === 'light' ? AppBackground({ theme }) : ComponentBackground({ theme })};
  border: 2px solid ${({ theme }) => BorderColor({ theme })};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => theme.mode === 'light' ? 'flex-start' : 'flex-end'};
  padding: 3px;
  width: 50px;
  height: 24px;
  position: relative;
  transition: justify-content 0.3s ease;

  &::before {
    content: '';
    background: ${({ theme }) => TextColor({ theme })};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    transition: background-color 0.3s ease;
  }
`;

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
    initialTheme?: 'light' | 'dark';  // Optional prop to set initial theme
}

export const LlaneUi: React.FC<LlaneUiProps> = ({ children, initialTheme = 'light' }) => {
    const initialThemeSettings = initialTheme === 'dark' ? defaultDarkTheme : defaultLightTheme;
    const [theme, setTheme] = useState<DefaultTheme>(initialThemeSettings);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme.mode === 'light' ? defaultDarkTheme : defaultLightTheme );
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