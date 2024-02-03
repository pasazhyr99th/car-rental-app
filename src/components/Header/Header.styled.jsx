import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const HeaderContainer = styled.div`
  padding: 20px;

  border-bottom: 1px solid ${styleGuide.lightGreyTextColor};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
`;

export const StyledLink = styled(Link)`
  padding: 12px 30px;

  font-size: 20px;
  line-height: 1.11;

  border: 1px solid transparent;
  border-radius: 30px;
  transition:
    background-color 300ms ease-in-out,
    color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: ${styleGuide.whiteColor};
    background-color: ${styleGuide.blueMainColor};
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
