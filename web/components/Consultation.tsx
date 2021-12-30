import { Image } from '@chakra-ui/image';
import {
  Box,
  Flex,
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import Layout from './Layout';

const Consultation = (props: any) => {
  return (
    <Layout>
      <Flex flexDirection="column" mx={[2, 4, 8, 24, 48, 64]}>
        <Heading mx="auto" mt={4}>
          {props.title}
        </Heading>
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} mt={4}>
          <Flex flexDirection="column" mr={6}>
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
            <Heading mt="auto" bgColor="gray.200">
              What can i offer:
            </Heading>
            <UnorderedList pl={12} ml={0} bgColor="gray.200">
              <ListItem>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>
                Facilisis in pretium nisl aliquet Integer molestie Facilisis in
                pretium nisl aliquet
              </ListItem>
              <ListItem>
                Facilisis in Integer molestie pretium nisl aliquet
              </ListItem>
            </UnorderedList>
          </Flex>
          <Image
            src={props.image}
            alt="family"
            maxWidth={[355, 450]}
            mx="auto"
          />
        </Grid>
      </Flex>
    </Layout>
  );
};

export default Consultation;
