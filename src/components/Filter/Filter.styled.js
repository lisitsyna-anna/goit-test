import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  padding: 14px 28px;
  border: 1px solid #ccc;
  border: none;
  border-radius: ${p => p.theme.radii.btnRadius};
  width: 100%;
  height: 50px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.followBtnBgColor};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.btnTextColor};

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const StyledDropdown = styled.div`
  display: ${p => (p.isVisibleDropDown ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  appearance: none;

  border-radius: ${p => p.theme.radii.btnRadius};
  background-color: ${p => p.theme.colors.followBtnBgColor};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.btnTextColor};

  @media screen and (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const StyledArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #666;
`;

export const SelectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SelectItem = styled.li`
  transition: color 250ms linear;
  &:hover {
    color: ${p => p.theme.colors.mainAccent};
  }
`;
