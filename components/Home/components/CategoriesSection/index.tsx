import { FolderNotchOpen } from 'phosphor-react';
import { useReduxSelector } from '../../../../store';
import { Box } from '../../../../styles/Box';
import { TitleH2 } from '../../../../styles/Titles/TitleH2';
import { ButtonLink } from '../../../ButtonLink';
import { Loading } from '../../../Loading';

export const CategoriesSection = () => {
  const categories = useReduxSelector((state) => state.categories.data);

  return (
    <Box
      direction="column"
      justify="center"
      align="center"
      gap="38"
      css={{
        marginTop: '150px',

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
        direction="column"
        justify="between"
        align="center"
        gap="50"
        css={{
          width: '100%',

          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        {categories.length > 0 ?
          categories.map((category) => (
              <ButtonLink
                key={category.id}
                href="/"
                borderRadius="small"
                fontSize="large"
                backgroundColorHover="yellow"
                beforeShadow="orange"
                css={{
                  height: '80px',
                  width: '100%',
                  paddingInline: '1rem',
                  paddingBlock: '1.5rem',

                  '@md': {
                    width: '388px',
                  },
                }}
              >
                {category.name}
              </ButtonLink>
            )
          ) : (
            <Loading cssSvg={{ width: '3rem' }} />
          )
        }
      </Box>
    </Box>
  );
};
