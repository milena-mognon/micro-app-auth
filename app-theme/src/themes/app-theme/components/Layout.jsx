import { Box, Flex, VStack } from '@chakra-ui/layout';
import logo from '../../../static/img/teste.png';
import { Text, Image } from '@chakra-ui/react';
import LocaleSelect from './LocaleSelect.jsx';

export const Layout = props => {
  const { i18nEnable, locale, children, title } = props;
  return (
    <>
      {/* <ColorModeSwitcher /> */}
      {/* i18nEnable
      locale: { currentLocale, locales: {label, url}[]} */}
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="90vh"
      >
        <Box
          bg="white"
          width={[
            '100%', // 0-30em -> 480px
            '50%', // 30em-48em -> 768px
            '50%', // 48em-62em -> 992px
            '30%', // 62em+ -> +992px
          ]}
          p={4}
          //color="white"
          shadow="2xl"
          borderRadius="8px"
        >
          <VStack>
            <Image src={logo} alt="Logo" />
            <Text color="#2e3a48" fontSize="2xl" mb={0}>
              {title}
            </Text>
          </VStack>
          {children}
        </Box>
        {i18nEnable && locale && (
          <Box>
            <LocaleSelect
              locales={locale.locales}
              defaultValue={locale.currentLocale}
            />
          </Box>
        )}
      </Flex>
    </>
  );
};
