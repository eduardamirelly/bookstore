import Image from 'next/image';
import { Box } from '../../../../styles/Box';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { TitleH1 } from '../../../../styles/Titles/TitleH1';
import { ButtonLink } from '../../../ButtonLink';
import { InputSearch } from '../../../InputSearch';

import { Binoculars } from 'phosphor-react';
import { GifBox, HeroHeader, HeroImage } from './styles';

export const HeroSection = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        marginTop: '40px',
        gap: '30px',
        justifyContent: 'space-around',
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
          // priority
        />
      </HeroImage>
    </Box>
  );
};
