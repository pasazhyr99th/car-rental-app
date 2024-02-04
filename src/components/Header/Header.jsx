import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="catalog">Catalog</StyledLink>
        <StyledLink to="favorite">Favorite</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
