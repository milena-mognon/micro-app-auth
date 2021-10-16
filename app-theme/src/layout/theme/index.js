import { extendTheme } from '@chakra-ui/react';
// Component style overrides
// import Text from './components/text';
import styles from './global/styles';

const overrides = {
  ...styles,
  // components: {
  //   Text,
  //   // Other components go here
  // },
};

console.log(overrides);

export default extendTheme(overrides);
