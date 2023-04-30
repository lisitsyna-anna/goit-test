import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.mainTextColor};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.mainTextColor};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: none;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Img = styled.img`
  width: 288px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.mainAccent};
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hoverBtnColor};
  }
`;
