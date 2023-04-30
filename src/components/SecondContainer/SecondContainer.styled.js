import styled from 'styled-components';

export const StyledSecondContainer = styled.div`
  max-width: 320px;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;
