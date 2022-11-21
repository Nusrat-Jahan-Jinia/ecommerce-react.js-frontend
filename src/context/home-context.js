export const home = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
      },
      dark: {
        foreground: '#ffffff',
        background: '#222222',
      },  
}

export const HomeContext = React.createContext(
    home.dark // default value
  );