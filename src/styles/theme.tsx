import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  subsets: ['latin-ext'],
  display: 'swap',
});

// Caso queira usar as cores do dark / light mode do sistema operacional, edite o tema aqui:
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
export const theme = extendTheme({
  fonts: {
    heading: `${font.style.fontFamily}, sans-serif`,
    body: `${font.style.fontFamily}, sans-serif`,
  },
  config,
});
