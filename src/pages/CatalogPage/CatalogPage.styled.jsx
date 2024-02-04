import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 29px;

  padding-top: 40px;

  width: 1184px;
`;

export const BtnLoadMore = styled.button`
  margin-top: 28px;
  margin-bottom: 100px;
  padding: 12px 0;

  width: 80px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${styleGuide.blueMainColor};

  border: none;

  background-color: transparent;

  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: ${styleGuide.blueHoverColor};
  }
`;
