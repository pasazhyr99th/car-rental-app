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
        <StyledLink to="/">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Home
        </StyledLink>
        <StyledLink to="catalog">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Catalog
        </StyledLink>
        <StyledLink to="favorite">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Favorite
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
