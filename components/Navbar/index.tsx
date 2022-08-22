import { Logo } from './components/Logo';
import { BookmarkButton } from './components/BookmarkButton';
import { ShoppingCartButton } from './components/ShoppingCartButton';
import { NavbarStyle, NavItemsStyle } from './styles';

export const Navbar = () => {
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
