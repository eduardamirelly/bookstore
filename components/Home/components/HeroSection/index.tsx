import Image from 'next/image';
import { Box } from '../../../../styles/Box';
import { styled } from '../../../../styles/stitches.config';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { TitleH1 } from '../../../../styles/Titles/TitleH1';
import { ButtonLink } from '../../../ButtonLink';
import { InputSearch } from '../../../InputSearch';

import { Binoculars } from 'phosphor-react';

export const HeroSection = () => {
  const HeroHeader = styled('div', {
    color: '$gray800',
    width: '100%',

    '@lg': {
      maxWidth: '535px',
    },
  });

  const HeroImage = styled('div', {
    width: '485px',
    maxHeight: '503px',
    position: 'relative',

    '&:before': {
      content: '',
      width: '100%',
      height: '100%',

      backgroundColor: '$blue500',
      position: 'absolute',

      borderTopRightRadius: '20px',
      borderBottomLeftRadius: '20px',

      marginTop: '-38px',
      marginLeft: '-46px',
    },

    display: 'none',

    '@lg': {
      display: 'block',
    },
  });

  const GifBox = styled('span', {
    position: 'absolute',

    '@xl': {
      right: '45px',
      bottom: '-60px',
    },

    img: {
      width: '60px',
      '@xl': {
        width: '141px',
      },
    },
  });

  return (
    <Box
      css={{
        alignItems: 'center',
        marginTop: '40px',
        gap: '30px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        '@lg': {
          flexWrap: 'nowrap',
        },
      }}
    >
      <HeroHeader>
        <TitleH1
          css={{
            position: 'relative',
            maxWidth: '535px',
          }}
        >
          What book you looking for?
          <GifBox>
            <img src="/assets/bookGif.gif" alt="" />
          </GifBox>
        </TitleH1>

        <TextSmall>Explore our catalog and find your next read.</TextSmall>

        <InputSearch />

        <ButtonLink href="/" color="yellow">
          Explore
          <Binoculars size={32} weight="light" />
        </ButtonLink>
      </HeroHeader>

      <HeroImage>
        <Image
          src="/assets/book-store-img.jpg"
          width={485}
          height={503}
          alt=""
          layout="responsive"
          objectFit="cover"
          priority
        />
      </HeroImage>
    </Box>
  );
};
