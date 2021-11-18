import { Box } from '@chakra-ui/layout';
import Footer from './Footer';
import NavBar from './NavBar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <Box as="main" d="flex" flexDirection="column" minHeight="100vh">
      <Head>
        <title>Czas mediacji</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
