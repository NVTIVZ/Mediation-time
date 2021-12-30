import { Box, Heading, Link } from '@chakra-ui/layout';
import axios from 'axios';
import marked from 'marked';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import NextLink from 'next/link';

interface dataProps {
  short: string;
  content: string;
  title: string;
  _id: string;
  date: string;
  image: string;
}

const SinglePost: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<dataProps | null>();
  useEffect(() => {
    const fetching = async () => {
      if (router.query.id) {
        const response = await axios.get(
          `http://localhost:4000/api/blogs/${router.query.id}`
        );
        setData(response.data);
      }
    };
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Layout>
      <Box mx={[2, 96]} d="flex" flexDirection="column">
        <NextLink href="/blog/" passHref>
          <Link>Back to blogs</Link>
        </NextLink>
        <Box mt="8" mx="auto">
          <Heading fontSize="5xl">{data ? data.title : 'Loading'}</Heading>
        </Box>
        <Box
          height={200}
          backgroundImage={data?.image}
          bgPosition="0 50%"
          my={4}
        ></Box>

        {data?.content ? (
          <Box
            mt="4"
            dangerouslySetInnerHTML={{ __html: marked(data.content) }}
          ></Box>
        ) : null}
      </Box>
    </Layout>
  );
};

export default SinglePost;
