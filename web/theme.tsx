import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
      },
      h1: {
        fontSize: '2em',
        fontWeight: 'bold',
      },
    },
  },
});

export default theme;
