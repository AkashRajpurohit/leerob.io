import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';
import { GithubIcon, TwitterIcon, YoutubeIcon, MailIcon, LinkedinIcon } from './icons/customIcons';

import NowPlaying from './NowPlaying';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <NowPlaying />
    <div>
      <Link href="https://twitter.com/leeerob" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon={<TwitterIcon />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/leerob" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<GithubIcon />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/leeerob"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon={<LinkedinIcon />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon={<YoutubeIcon />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:me@leerob.io" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<MailIcon />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <NextLink href="/uses" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          /uses
        </Link>
      </NextLink>
      <Link
        fontSize="sm"
        color="gray.500"
        minWidth="100px"
        mr={2}
        href="https://photos.leerob.io/"
        title="Photos"
        isExternal
      >
        /photos
      </Link>
      <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
