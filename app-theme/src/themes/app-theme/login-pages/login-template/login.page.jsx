/* eslint-disable no-undef */
import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../../../../reportWebVitals';
import { Layout } from '../../components/Layout';
import { Button, Input, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import theme from '../../../../layout/theme';

const LoginPage = props => {
  const { loginEnabled, loginAction } = props;

  return (
    <>
      {!loginEnabled && (
        <Text color="#2e3a48">
          Login não habilitado, contate o administrador
        </Text>
      )}
      <Box w="100%" color="white" mt={0}>
        <form action={loginAction} mathod="post">
          <FormLabel m={0} fontSize="16px">
            Usuário
          </FormLabel>
          <Input
            color="#2e3a48"
            id="username"
            name="username"
            autoFocus
            autoComplete="off"
            _focus={{ border: '2px solid #2e3a48', borderRadius: '4px' }}
            type="text"
            size="sm"
            w="100%"
            mb={2}
          />
          <FormLabel for="password" m={0} fontSize="16px">
            Senha
          </FormLabel>
          <Input
            color="#2e3a48"
            id="password"
            name="password"
            _focus={{ border: '2px solid #2e3a48', borderRadius: '4px' }}
            variant="outline"
            type="password"
            size="sm"
            w="100%"
          />
        </form>
      </Box>
      <Flex alignItems="center" flexDirection="column" w="100%" p={[0, 2]}>
        <Button
          fontSize="16px"
          _hover={{ bg: '#3c4c5e' }}
          bg="#2e3a48"
          mt={2}
          colorScheme="blue"
          variant="solid"
          size="sm"
          w="100%"
          onClick={() => {}}
        >
          Acessar
        </Button>
        <Text fontSize="sm" mt={8}>
          Todos os direitos reservados © 2021
        </Text>
      </Flex>
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Layout {...obj}>
        <LoginPage {...pageProps} />
      </Layout>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
