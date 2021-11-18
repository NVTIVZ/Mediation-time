import { Button } from '@chakra-ui/button';
import { Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Layout from '../../components/Layout';
import NextLink from 'next/link';

const ofertaPage = () => {
  return (
    <Layout>
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
        mx={[2, 64]}
        height="84vh"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/images/business.jpg)"
          backgroundSize="cover"
        >
          <Heading color="white">Business consultation</Heading>
          <Text mx={4} mt={8} color="white" fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            architecto facilis praesentium, ex rerum, autem eligendi sapiente
            doloremque vero sequi porro molestiae dolor vitae expedita nam
            fugiat quidem. Saepe, distinctio.
          </Text>
          <NextLink href="/offer/business" passHref>
            <Button mt={4}>Check offer</Button>
          </NextLink>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundSize="cover"
          backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/images/family.jpg)"
        >
          <Heading color="white">Family consultation</Heading>
          <Text mx={4} mt={8} color="white" fontSize="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            architecto facilis praesentium, ex rerum, autem eligendi sapiente
            doloremque vero sequi porro molestiae dolor vitae expedita nam
            fugiat quidem. Saepe, distinctio.
          </Text>
          <NextLink href="/offer/family" passHref>
            <Button mt={4}>Check offer</Button>
          </NextLink>
        </Flex>
      </Grid>
    </Layout>
  );
};

export default ofertaPage;
