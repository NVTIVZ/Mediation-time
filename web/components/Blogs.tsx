/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import NextLink from 'next/link';
import { SlideFade } from '@chakra-ui/transition';

interface blogProps {
  short: string;
  image: string;
  title: string;
  date: string;
  _id: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogProps[] | undefined>();
  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get(
        'https://server-mediation.herokuapp.com/api/blogs'
      );
      setBlogs(response.data);
    };
    fetching();
  }, []);
  console.log(blogs);
  const renderBlogs = () => {
    if (blogs) {
      return blogs.map((blog: any, index: number) => {
        const czas = new Date(blog.date).toLocaleDateString();
        console.log(blog);
        return (
          <SlideFade
            in={true}
            offsetX="-30px"
            offsetY="0"
            transition={{ enter: { duration: 0.5, delay: index / 4 } }}
            unmountOnExit={true}
            key={blog._id}
          >
            <Box
              key={blog._id}
              height={48}
              d="flex"
              background="gray.200"
              width="100%"
              borderRadius="xl"
              mt={10}
            >
              <Image src={blog.image} alt={blog.title} borderStartRadius="lg" />
              <Box d="flex" flexDirection="column" ml={4} mt={2}>
                <Heading fontSize="2xl">{blog.title}</Heading>
                <Text mt="2">{blog.short}</Text>
                <NextLink href={`/blog/${blog._id}`}>
                  <Link mt="auto" fontStyle="italic">
                    Read more
                  </Link>
                </NextLink>
                <Text mt="1" fontStyle="italic">
                  {czas}
                </Text>
              </Box>
            </Box>
          </SlideFade>
        );
      });
    }
  };

  console.log(blogs);
  return (
    <Flex
      mx={[2, 4, 12, 24, 96]}
      mt={8}
      wrap="wrap"
      mb="4"
      flexDirection="column"
    >
      <Heading fontSize="5xl" mx="auto">
        Blog
      </Heading>
      {blogs ? (
        renderBlogs()
      ) : (
        <Heading width="100%" mx="auto">
          Loading...
        </Heading>
      )}
    </Flex>
  );
};

export default Blogs;
