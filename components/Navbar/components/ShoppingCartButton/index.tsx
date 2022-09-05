import { CaretLeft, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { Box } from '../../../../styles/Box';
import { IconClick } from '../../../../styles/IconClick';
import { TextLarge } from '../../../../styles/Texts/TextLarge';
import { TextSmall } from '../../../../styles/Texts/TextSmall';
import { ButtonLink } from '../../../ButtonLink';
import { LabelPrice } from '../../../LabelPrice';
import { CartSidebarStyle, PanelCover } from './styles';

export const ShoppingCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconClick onClick={() => setIsOpen(true)}>
        <ShoppingCart size={32} weight="light" />
      </IconClick>

      <CartSidebarStyle css={isOpen ? { right: 0 } : {}}>
        <Box css={{ alignItems: 'center', gap: '10px', paddingInline: '20px' }}>
          <IconClick onClick={() => setIsOpen(false)}>
            <CaretLeft size={32} weight="light" />
          </IconClick>

          <TextSmall>
            Your Cart <span>(02 items)</span>
          </TextSmall>
        </Box>

        <Box
          css={{
            width: '100%',
            borderTop: '2px solid $gray800',
            borderLeft: '2px solid $gray800',

            borderTopLeftRadius: '20px',
            paddingInline: '20px',
            paddingBlock: '30px',

            position: 'absolute',
            bottom: '0',

            flexDirection: 'column',
            gap: '38px',
          }}
        >
          <Box
            css={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
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
      <PanelCover css={isOpen ? { display: 'block', opacity: '.3' } : {}} />
    </>
  );
};
