import styled from 'styled-components';

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 60px;
  }
`;
