import { FolderNotchOpen } from 'phosphor-react';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { ButtonLink } from '../../../ButtonLink';

export const CategoriesSection = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '150px',
        gap: '36px',

        '@lg': {
          marginTop: '220px',
        },
      }}
    >
      <TitleH2
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          alignSelf: 'flex-start',
        }}
      >
        <FolderNotchOpen size={36} weight="regular" />
        Categories
      </TitleH2>

      <Box
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '50px',
          flexDirection: 'column',

          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>

        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>

        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>
      </Box>

      <Box
        css={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '50px',
          flexDirection: 'column',

          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>

        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>

        <ButtonLink
          href="/"
          borderRadius="small"
          fontSize="large"
          backgroundColorHover="yellow"
          beforeShadow="orange"
          css={{
            height: '80px',
            width: '100%',

            '@md': {
              width: '388px',
            },
          }}
        >
          Adventure
        </ButtonLink>
      </Box>
    </Box>
  );
};
