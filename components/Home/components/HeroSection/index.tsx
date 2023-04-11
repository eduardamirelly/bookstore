import Image from 'next/image';
import { Box } from '../../../../styles/Box';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { TitleH1 } from '../../../../styles/Titles/TitleH1';
import { ButtonLink } from '../../../ButtonLink';
import { InputSearch } from '../../../InputSearch';

import { Binoculars } from 'phosphor-react';
import { GifBox, HeroHeader, HeroImage } from './styles';
import { DashLine } from '../../../../styles/DashLine';
import { useSearch } from '../../../../hooks/useSearch';

export const HeroSection = () => {

  const { handleInputText } = useSearch();

  return (
    <Box
      justify="around"
      align="center"
      gap="30"
      wrap="wrap"
      css={{
        marginTop: '40px',

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

        <Box direction="column">
          <InputSearch onChange={handleInputText} />

          <Box
            align="center"
            justify="center"
            gap="20"
            wrap="wrap"
            css={{
              '@lg': {
                maxWidth: '490px',
              },
              '@md': {
                maxWidth: '90%',
              },
              '@xs': {
                flexWrap: 'nowrap',
              },
            }}
          >
            <ButtonLink
              href="/catalog"
              color="yellow"
              fontSize="small"
              borderRadius="small"
              css={{
                height: '51px',
                width: '100%',

                paddingInline: '1rem',
                paddingBlock: '1.5rem',

                '@xs': {
                  width: '153px',
                },
              }}
            >
              Explore
              <Binoculars size={32} weight="light" />
            </ButtonLink>

            <DashLine />
          </Box>
        </Box>
      </HeroHeader>

      <HeroImage>
        <Image
          src="/assets/book-store-img.jpg"
          width={485}
          height={503}
          alt=""
        />
      </HeroImage>
    </Box>
  );
};
