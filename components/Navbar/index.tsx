import { styled } from '../../styles/stitches.config';
import { Logo } from './components/Logo';
import { BookmarkButton } from './components/BookmarkButton';
import { ShoppingCartButton } from './components/ShoppingCartButton';

export const Navbar = () => {
  const NavbarStyle = styled('div', {
    width: '100%',
    paddingBlock: '2rem',
    display: 'flex',
    gap: '40px',
    color: '$gray800',
  });

  const NavItemsStyle = styled('div', {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '25px',
  });

  return (
    <NavbarStyle>
      <Logo />
      <NavItemsStyle>
        <BookmarkButton />
        <ShoppingCartButton />
      </NavItemsStyle>
    </NavbarStyle>
  );
};
