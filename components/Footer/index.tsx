import { FigmaLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Box } from '../../styles/Box';
import { DashLine } from '../../styles/DashLine';
import { TextMedium } from '../../styles/Texts/TextMedium';
import { ButtonLink } from '../ButtonLink';

export const Footer = () => {
  return (
    <footer>
      <Box
        direction="column"
        justify="center"
        align="center"
        gap="20"
        css={{
          marginTop: '150px',
          marginBottom: '114px',

          '@lg': {
            marginTop: '220px',
          },
        }}
      >
        <DashLine />

        <Box
          direction="column"
          justify="between"
          align="center"
          gap="45"
          css={{
            width: '100%',
            marginTop: '50px',

            '@md': {
              flexDirection: 'row',
            },
          }}
        >
          <TextMedium>BookStore Project</TextMedium>

          <Box gap="20">
            <ButtonLink
              href="https://www.linkedin.com/in/eduarda-neves"
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
              href="https://www.figma.com/@eduardamirelly"
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
              <FigmaLogo size={36} weight="light" />
            </ButtonLink>
          </Box>

          <TextMedium>by eduardamirelly</TextMedium>
        </Box>
      </Box>
    </footer>
  );
};
