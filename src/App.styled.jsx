import styled from '@emotion/styled';
import 'normalize.css';

export const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
  margin-inline: auto;
  padding-inline: 18px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 18px;
  }

  @media screen and (min-width: 1220px) {
    width: 1220px;
  }
`;
