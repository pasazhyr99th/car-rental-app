import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const ContainerCard = styled.div`
  position: relative;

  width: 274px;
  box-sizing: border-box;
`;

export const ContainerMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  padding: 0;

  border: none;

  background-color: transparent;
`;

export const BtnIconFavorite = styled.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
`;

export const BtnIconFavoriteAct = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${styleGuide.blueMainColor};
  fill: ${styleGuide.blueMainColor};
`;

export const CarImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;

  margin-top: 8px;

  width: 100%;
  max-height: 40px;
`;

export const DescriptionItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;

export const BtnLearnMore = styled.button`
  margin-top: 28px;
  padding: 12px 50px;

  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${styleGuide.whiteColor};

  border: 1px solid ${styleGuide.blueMainColor};
  border-radius: 12px;

  background-color: ${styleGuide.blueMainColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: ${styleGuide.blueHoverColor};
  }
`;
