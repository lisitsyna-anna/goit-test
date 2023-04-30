import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    gap: 40px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const StyledImg = styled.img`
  width: 288px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;
