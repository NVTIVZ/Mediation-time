import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

import axios from 'axios';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import Layout from '../components/Layout';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Flex
        mx={[2, 4, 8, 12, 24, 96]}
        mt={16}
        flexDirection="column"
      >
        <Box
          d="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="3xl">
            You want to make an appointment or
            book a coaching session?
          </Heading>
          <Text mt="4">
            You can e-mail me or contact me by
            phone.
          </Text>
        </Box>
        <Box
          d="flex"
          justifyContent="space-around"
          mt="4"
        >
          <Box d="flex" alignItems="center">
            <FiPhone size="28" />

            <Text ml="2" fontSize="lg">
              Phone number
            </Text>
          </Box>
          <Box d="flex" alignItems="center">
            <FiMail size="28" />

            <Text ml="2" fontSize="lg">
              E-mail address
            </Text>
          </Box>
        </Box>
        <Text mx="auto" mt="4">
          You can also complete contact form below
          to get in touch with me.
        </Text>
        <Box mt="4" mx={[2, 4, 8, 16, 64]}>
          <Formik
            initialValues={{
              email: '',
              imie: '',
              wiadomosc: '',
            }}
            // validate={(values) => {
            //   const errors = { email: '' };
            //   if (!values.email) {
            //     errors.email = 'Pole nie moze byc puste';
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = 'Zły format adresu email';
            //   }
            //   throw errors;
            // }}
            onSubmit={async (
              values,
              { resetForm }
            ) => {
              console.log(values);
              try {
                const response = await axios.post(
                  'http://localhost:4000/api/contacts',
                  {
                    email: values.email,
                    content: values.wiadomosc,
                    name: values.imie,
                  }
                );
                console.log(response);
                resetForm({});
              } catch {}
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  placeholder="Imie"
                  my="4"
                  name="imie"
                  onChange={handleChange}
                  value={values.imie}
                />
                <Input
                  placeholder="E-mail"
                  my="4"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <Text
                  color="red.500"
                  fontSize="small"
                >
                  {errors.email &&
                    touched.email &&
                    errors.email}
                </Text>
                <Textarea
                  placeholder="Tresc wiadomosci"
                  my="4"
                  name="wiadomosc"
                  resize="none"
                  height={192}
                  onChange={handleChange}
                  value={values.wiadomosc}
                />
                <Box d="flex">
                  <Button
                    colorScheme="blue"
                    mx="auto"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Wyślij
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ContactPage;
