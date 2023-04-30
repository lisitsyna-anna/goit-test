import styled from 'styled-components';
import bgCard1x from '../../images/cardBg-1x.png';
import bgCard2x from '../../images/cardBg-2x.png';

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
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 96px) / 3);
  }

  &::after {
    position: absolute;
    top: 214px;
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
export const UpperWrapper = styled.div`
  padding-left: 20px;
  height: 238px;
  margin-bottom: 26px;
  background-image: url(${bgCard1x});
  background-repeat: no-repeat;
  background-size: 240px 160px;
  background-position: left 25px top 8px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgCard2x});
  }

  @media screen and (min-width: 768px) {
    background-size: 280px 168px;
    background-position: left 36px top 8px;
  }

  @media screen and (min-width: 1440px) {
    background-size: 308px 168px;
    background-position: left 36px top 8px;
  }
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  padding-bottom: 36px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 136px;
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

  @media screen and (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
