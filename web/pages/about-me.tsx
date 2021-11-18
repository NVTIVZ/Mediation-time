import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Layout from '../components/Layout';
import { SlideFade } from '@chakra-ui/transition';
import { Image } from '@chakra-ui/image';

const About = () => {
  return (
    <Layout>
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
        mx={[2, 96]}
        mt={16}
        id="o-mnie"
        mb={4}
      >
        <Flex direction="column">
          <SlideFade
            in={true}
            offsetX="-30px"
            offsetY="0"
            transition={{ enter: { duration: 1 } }}
            unmountOnExit={true}
          >
            <Heading>About me</Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales magna at quam laoreet, in luctus mi porta. Sed rutrum
              elementum purus id efficitur. Fusce posuere, sem tincidunt
              venenatis bibendum, orci felis hendrerit risus, id egestas mi
              magna vel est. Nullam feugiat pharetra dolor eu volutpat. Morbi
              vehicula accumsan libero quis venenatis. Morbi ligula metus,
              fermentum ut dolor vitae, pretium consequat lorem. Integer ut
              facilisis nisl, non lacinia nunc. Etiam efficitur malesuada leo eu
              eleifend. Nulla facilisi.
            </Text>
            <Text mt={2}>
              Nam enim felis, faucibus ac pellentesque et, egestas et velit.
              Mauris faucibus sodales ex at varius. Nunc tincidunt nisl sed
              tempus vestibulum. Cras consequat metus risus, non lacinia eros
              consectetur vitae. Praesent vulputate massa et pellentesque
              lobortis. Duis erat odio, pellentesque in erat non, tincidunt
              vestibulum tellus. Phasellus purus libero, vulputate vel ipsum
              elementum, consectetur venenatis elit.
            </Text>

            <Text mt={2}>
              Maecenas ornare ullamcorper justo id finibus. Morbi tempus varius
              ante, ut ornare odio pretium non. Aliquam vitae suscipit nunc.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec tristique, nisi sed
              suscipit venenatis, mi leo maximus quam, ac ullamcorper libero ex
              sed ligula. In iaculis, risus et ornare hendrerit, dui nisl
              convallis sem, in congue risus justo a dolor. Donec semper lorem
              dui, at euismod leo dapibus eu.
            </Text>
          </SlideFade>
        </Flex>
        <Box d="flex" justifyContent="center">
          <SlideFade
            in={true}
            offsetX="30px"
            offsetY="0"
            transition={{ enter: { duration: 1 } }}
            unmountOnExit={true}
          >
            <Image src="/images/about.jpg" alt="me" mx={4} />
          </SlideFade>
        </Box>
      </Grid>
    </Layout>
  );
};

export default About;
