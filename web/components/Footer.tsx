import { Box, Flex } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      background="whitesmoke"
      width="100%"
      mt="auto"
      px={[2, 4, 8, 16, 32, 96]}
      height="8vh"
    >
      <Box d="flex" dir="row" justifyContent="center" mt={2}>
        <Box
          background="gray.300"
          width={10}
          height={10}
          borderRadius="full"
          d="flex"
          justifyContent="center"
          alignItems="center"
          mx={1}
          _hover={{ cursor: 'pointer' }}
        >
          <FaLinkedinIn />
        </Box>
        <Box
          background="gray.300"
          width={10}
          height={10}
          borderRadius="full"
          d="flex"
          justifyContent="center"
          alignItems="center"
          mx={1}
          _hover={{ cursor: 'pointer' }}
        >
          <FaFacebookF />
        </Box>
        <Box
          background="gray.300"
          width={10}
          height={10}
          borderRadius="full"
          d="flex"
          justifyContent="center"
          alignItems="center"
          mx={1}
          _hover={{ cursor: 'pointer' }}
        >
          <FaInstagram />
        </Box>
      </Box>
      <Box mx="auto" mt="auto" fontSize={13} mb={2}>
        ©️ Mediaton Time 2021 | Created by{' '}
        <Link href="https://www.jakubzawadzki.dev/" target="_blank">
          Jakub Zawadzki
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
