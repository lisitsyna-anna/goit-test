import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  padding-top: 20px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${p => p.theme.radii.cardRadius};

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 50px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 96px) / 3);
  }
`;
export const UpperWrapper = styled.div`
  padding-left: 20px;
  margin-bottom: 136px;
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 218px;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    width: 308px;
  }
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  padding-bottom: 36px;

  &::after {
    position: absolute;
    top: 40px;
    z-index: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 8px;
    transform: translateY(-50%);
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.round};
  border-width: 8px;
  background-color: ${p => p.theme.colors.borderColor};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledAvatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
