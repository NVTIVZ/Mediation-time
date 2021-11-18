import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Fade } from '@chakra-ui/transition';

const Intro = () => {
  return (
    <Box
      backgroundImage="/images/meeting.jpg"
      bgRepeat="no-repeat"
      bgPosition="50% 70%"
      minHeight="84vh"
    >
      <Flex
        background="rgba(0,0,0,0.5)"
        minHeight="inherit"
        alignItems="center"
      >
        <Flex color="white" flexDirection="column" mx={[4, 12, 24, 32, 48, 96]}>
          <Fade
            in={true}
            unmountOnExit={true}
            transition={{ enter: { duration: 0.5 } }}
          >
            <Box d="flex">
              <Image
                src="/images/Handshake1.svg"
                alt="logo"
                height="300"
                mx="auto"
              />
            </Box>
          </Fade>

          <Fade
            in={true}
            unmountOnExit={true}
            transition={{ enter: { duration: 0.5, delay: 0.7 } }}
          >
            {' '}
            <Text mt={8} mx={[4, 8, 16, 48]} fontSize="2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              harum at quos minus ab, nostrum numquam dolorum? Sit eum eius
              cupiditate laborum. Quos perspiciatis delectus voluptas sed, eaque
              hic rem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis harum at quos minus ab, nostrum numquam dolorum? Sit eum
              eius cupiditate laborum. Quos perspiciatis delectus voluptas sed,
              eaque hic rem?{' '}
            </Text>
          </Fade>

          <Fade
            in={true}
            unmountOnExit={true}
            transition={{ enter: { duration: 0.7, delay: 1.4 } }}
          >
            {' '}
            <Text mt={12} fontStyle="italic" mx={[4, 8, 16, 48]} fontSize="lg">
              {'"'}When we strive to become better than we are, everything
              around us becomes better too.{'"'} - Paulo Coelho
            </Text>
          </Fade>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Intro;
