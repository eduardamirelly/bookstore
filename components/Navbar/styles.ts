import { styled } from '../../styles/stitches.config';

export const NavbarStyle = styled('div', {
  width: '100%',
  paddingBlock: '2rem',
  display: 'flex',
  gap: '40px',
  color: '$gray800',
});

export const NavItemsStyle = styled('div', {
  flex: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '25px',
});
