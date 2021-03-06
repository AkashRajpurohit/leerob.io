import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
} from '@chakra-ui/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://leerob.io/about';
const title = 'About Me – Lee Robinson';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Lee. I'm a developer, writer, and the creator of&nbsp;
              <CustomLink href="https://masteringnextjs.com">
                Mastering Next.js
              </CustomLink>
              &nbsp;and&nbsp;
              <CustomLink href="https://react2025.com">React 2025.</CustomLink>
              &nbsp;I work at ▲Vercel as a Solutions Architect.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I’ve spoken across the country at conferences and meet-ups about
              front-end development, design, and recruiting. I write about
              development, tech careers, and my personal life on&nbsp;
              <CustomLink href="/newsletter">my newsletter.</CustomLink>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in small-town Iowa and went to school at Iowa State,
              graduating with a degree in Computer Engineering. I spend my free
              time playing music, creating videos, and enjoying time with
              friends and family in Des Moines, IA.
            </Text>
            <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
              Conference Talks
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="https://youtu.be/z3rmZbOEBCM?t=273"
                isExternal
              >
                <Flex align="center">
                  Building Static Sites with Prisma and Next.js
                  <ExternalLinkIcon mx={2} boxSize="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              During this workshop, you'll learn how to integrate Prisma with
              Next.js and build a statically-generated site that displays a list
              of your favorite songs. We'll use Chakra UI for styling and deploy
              our site with Vercel.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/building-component-libraries-with-a-monorepo.pdf"
                isExternal
              >
                <Flex align="center">
                  Building Component Libraries with a Monorepo
                  <ExternalLinkIcon mx={2} boxSize="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Learn why your organization needs a component library and discover
              the best practices for building, scaling, and adopting it across
              all platforms. We'll be using industry-standard technology (React,
              JavaScript, Storybook) alongside cutting-edge solutions
              (CSS-in-JS, Monorepo).
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/recruiting-engineers-talent42-lee-robinson.pdf"
                isExternal
              >
                <Flex align="center">
                  Recruiting Engineers (From An Engineer's Perspective)
                  <ExternalLinkIcon mx={2} boxSize="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Hiring talent is becoming increasingly difficult with low
              unemployment rates and the tech industry booming. What you can do
              to stick out? Learn from an engineer who's been involved on both
              sides - both as a candidate and with hiring - on what candidates
              really want out of a position.
            </Text>
            <iframe
              height="280"
              src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
              title="Lee's Travel Map"
              width="100%"
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
