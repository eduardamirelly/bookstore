import Image from 'next/image';
import { Box } from '../../../../styles/Box';
import { styled } from '../../../../styles/stitches.config';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { TitleH1 } from '../../../../styles/Titles/TitleH1';

export const HeroSection = () => {
  const HeroHeader = styled('div', {
    color: '$gray800',
    maxWidth: '535px',
  });

  const HeroImage = styled('div', {
    width: '530px',
    maxHeight: '550px',
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

    '@sm': {
      right: '45px',
      bottom: '-60px',
    },

    img: {
      width: '60px',
      '@sm': {
        width: '141px',
      },
    },
  });

  return (
    <Box
      css={{
        alignItems: 'center',
        marginTop: '50px',
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
          }}
        >
          What book you looking for?
          <GifBox>
            <img src="/assets/bookGif.gif" alt="" />
          </GifBox>
        </TitleH1>

        <TextSmall>Explore our catalog and find your next read.</TextSmall>
      </HeroHeader>

      <HeroImage>
        <Image
          src="/assets/book-store-img.jpg"
          width={530}
          height={550}
          alt=""
          layout="responsive"
          objectFit="cover"
          priority
        />
      </HeroImage>
    </Box>
  );
};
