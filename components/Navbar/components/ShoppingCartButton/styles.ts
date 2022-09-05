import { styled } from "../../../../styles/stitches.config"

export const CartSidebarStyle = styled('span', {
  width: '100%',
  minHeight: '100vh',

  position: 'fixed',
  top: '0',
  right: '-486px',
  zIndex: '15',

  backgroundColor: 'white',

  paddingTop: '50px',

  transition: 'all .3s ease',

  '@sm': {
    width: '486px',
  }
})

export const PanelCover = styled('span', {
  width: '100%',
  minHeight: '100vh',

  position: 'fixed',
  top: '0',
  right: '0',
  zIndex: '12',
  display: 'none',

  backgroundColor: '$gray600',
  opacity: '0',

  transition: 'all .3s ease',
})
