import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

export const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 24px;
  width: 541px;
  height: 752px;

  background-color: ${styleGuide.whiteColor};
  padding: 40px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1001;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;

  width: 24px;
  height: 24px;

  padding: 0;

  border: none;
  outline: none;
  border-radius: 50%;

  background-color: transparent;

  &:hover {
    background-color: ${styleGuide.lightGreyTextColor};
  }
`;

export const BtnIconClose = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${styleGuide.blackMain};
`;

export const Image = styled.img`
  width: 100%;
  height: 314px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`;

export const Title = styled.p`
  margin-top: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 8px;
`;

export const DescriptionText = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: 1.43;
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 6px;

  width: 100%;
  height: 16px;

  overflow: hidden;
`;

export const DescriptionItem = styled.li`
  color: ${styleGuide.greyTagColor};
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

export const Label = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43%;
  color: #121417;
`;

export const BtnRental = styled.a`
  margin-top: 28px;
  padding: 12px 50px;

  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${styleGuide.whiteColor};

  border: 1px solid ${styleGuide.blueMainColor};
  border-radius: 12px;
  outline: none;

  background-color: ${styleGuide.blueMainColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: ${styleGuide.blueHoverColor};
  }
`;
