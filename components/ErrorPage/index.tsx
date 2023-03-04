import { GithubLogo } from 'phosphor-react';
import React from 'react';
import { Box } from '../../styles/Box';
import { TextMedium } from '../../styles/Texts/TextMedium';
import { TextXSmall } from '../../styles/Texts/TextXSmall';
import { TitleH2 } from '../../styles/Titles/TitleH2';
import { ButtonLink } from '../ButtonLink';
import { GifBox } from './styles';

interface ErrorPageProps {
  subtitle: string;
  description: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  subtitle,
  description,
}) => {
  return (
    <Box
      direction="column"
      justify="center"
      align="center"
      css={{
        minHeight: '100vh',
        textAlign: 'center',
        paddingBlock: '40px',
      }}
    >
      <GifBox>
        <img src="/assets/error-gif.gif" alt="" />
      </GifBox>

      <TitleH2>{subtitle}</TitleH2>

      <TextMedium css={{ color: '$gray600', marginTop: '1rem' }}>
        {description}
      </TextMedium>

      <ButtonLink
        href="/"
        borderRadius="medium"
        color="yellow"
        fontSize="medium"
        css={{
          width: '100%',
          marginTop: '1.5rem',
          '@sm': { width: '420px' },
        }}
      >
        Go back to Home
      </ButtonLink>

      <Box
        justify="center"
        align="center"
        gap="20"
        css={{
          marginTop: '1.5rem',
        }}
      >
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

        <TextXSmall
          css={{ width: '210px', textAlign: 'start', '@md': { width: '50%' } }}
        >
          You are Dev? If yes, you can register one issue on github, if you want
          contribe to this project.
        </TextXSmall>
      </Box>
    </Box>
  );
};
