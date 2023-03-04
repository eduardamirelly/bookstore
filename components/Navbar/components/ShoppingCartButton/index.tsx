import { CaretLeft, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { useReduxSelector } from '../../../../store';
import { Box } from '../../../../styles/Box';
import { IconClick } from '../../../../styles/IconClick';
import { TextLarge } from '../../../../styles/Texts/TextLarge';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { ButtonLink } from '../../../ButtonLink';
import { LabelPrice } from '../../../LabelPrice';
import { BookInCart } from './components/BookInCart';
import { CartSidebarStyle, PanelCover } from './styles';

export const ShoppingCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const booksOnCart = useReduxSelector((state) => state.booksOnCart.data);

  return (
    <>
      <IconClick onClick={() => setIsOpen(true)}>
        <ShoppingCart size={32} weight="light" />
      </IconClick>

      <CartSidebarStyle
        css={
          isOpen
            ? {
                right: 0,
                width: '100%',
                '@sm': {
                  width: '486px',
                },
              }
            : {}
        }
      >
        <Box align="center" gap="10" css={{ paddingInline: '20px' }}>
          <IconClick onClick={() => setIsOpen(false)}>
            <CaretLeft size={32} weight="light" />
          </IconClick>

          <TextSmall>
            Your Cart{' '}
            <span>
              ({`${booksOnCart.length < 10 ? '0' : ''}${booksOnCart.length}`}{' '}
              items)
            </span>
          </TextSmall>
        </Box>

        <Box
          direction="column"
          gap="14"
          css={{
            marginTop: '1.25rem',
            maxHeight: 'calc(100vh - 20rem)',
            overflowY: 'auto',
            paddingBlock: '.625rem',
          }}
        >
          {booksOnCart.map((book) => (
            <BookInCart key={book.id} book={book} />
          ))}
        </Box>

        <Box
          direction="column"
          gap="38"
          css={{
            width: '100%',
            borderTop: '2px solid $gray800',
            borderLeft: '2px solid $gray800',

            borderTopLeftRadius: '1.25rem',
            paddingInline: '1.25rem',
            paddingBlock: '1.875rem',

            position: 'absolute',
            bottom: '0',

            backgroundColor: 'white',
          }}
        >
          <Box
            justify="between"
            align="center"
            css={{
              width: '100%',
            }}
          >
            <TextLarge>Subtotal:</TextLarge>

            <LabelPrice price="60.00" css={{ backgroundColor: '$yellow500' }} />
          </Box>

          <ButtonLink
            href="/"
            borderRadius="medium"
            color="orange"
            fontSize="large"
          >
            Pay with stripe
          </ButtonLink>
        </Box>
      </CartSidebarStyle>
      <PanelCover
        onClick={() => setIsOpen(false)}
        css={isOpen ? { display: 'block', opacity: '.3' } : {}}
      />
    </>
  );
};
