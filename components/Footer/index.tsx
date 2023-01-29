import { FigmaLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';
import { TextMedium } from '../../styles/Texts/TextMedium';
import { ButtonLink } from '../ButtonLink';

export const Footer = () => {
  return (
    <footer>
      <Box
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',

          marginTop: '150px',
          marginBottom: '114px',

          '@lg': {
            marginTop: '220px',
          },
        }}
      >
        <DashLine />

        <Box
          css={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',

            flexDirection: 'column',
            gap: '45px',
            marginTop: '50px',

            '@md': {
              flexDirection: 'row',
            },
          }}
        >
          <TextMedium>BookStore Project</TextMedium>

          <Box
            css={{
              gap: '22px',
            }}
          >
            <ButtonLink
              href="/"
              borderRadius="full"
              beforeShadow="blue"
              backgroundColorHover="yellow"
              colorText="gray600"
              css={{
                width: '60px',
                height: '60px',

                padding: '0',
              }}
            >
              <LinkedinLogo size={36} weight="light" />
            </ButtonLink>

            <ButtonLink
              href="https://github.com/eduardamirelly"
              isOneExternalLink
              borderRadius="full"
              beforeShadow="blue"
              backgroundColorHover="yellow"
              colorText="gray600"
              css={{
                width: '60px',
                height: '60px',

                padding: '0',
              }}
            >
              <GithubLogo size={36} weight="light" />
            </ButtonLink>

            <ButtonLink
              href="/"
              borderRadius="full"
              beforeShadow="blue"
              backgroundColorHover="yellow"
              colorText="gray600"
              css={{
                width: '60px',
                height: '60px',

                padding: '0',
              }}
            >
              <FigmaLogo size={36} weight="light" />
            </ButtonLink>
          </Box>

          <TextMedium>by eduardamirelly</TextMedium>
        </Box>
      </Box>
    </footer>
  );
};
