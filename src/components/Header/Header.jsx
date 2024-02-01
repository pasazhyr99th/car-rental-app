import {
  HeaderContainer,
  Navigation,
  StyledLink,
  // IconWrapper,
} from './Header.styled';
// import sprite from 'assets/sprite.svg';

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

/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */
