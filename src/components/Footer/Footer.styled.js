import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 40px;
`;

export const FooterText = styled.p`
  text-transform: none;
  color: rgba(235, 216, 255, 0.5);
  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;
`;

export const FooterLink = styled.a`
  color: inherit;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;
