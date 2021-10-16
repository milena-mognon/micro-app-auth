import { extendTheme } from '@chakra-ui/react';

console.log('entrou global');

const styles = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#edf0f5',
        color: 'white',
      },
      p: {
        color: '#2e3a48 !important',
      },
      label: {
        color: '#2e3a48 !important',
      },
    },
  },
});

export default styles;
