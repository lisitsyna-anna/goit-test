import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  height: 60px;
  margin-bottom: 40px;
  padding-top: 15px;
  padding-bottom: 20px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const StyledNavLink = styled(NavLink)`
  color: ${p => p.theme.colors.mainTextColor};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  transition: color 250ms linear;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }

  &.active {
    color: ${p => p.theme.colors.hoverBtnColor};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hoverBtnColor};
  }
`;
