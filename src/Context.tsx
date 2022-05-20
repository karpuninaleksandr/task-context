import { ReactElement } from 'react';
import { createContext, useContext } from 'react';

const ThemeContext = createContext<Theme>('light');

type Theme = 'light' | 'dark';

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
