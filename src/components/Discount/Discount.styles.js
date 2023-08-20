import styled from 'styled-components';

import { GoX } from 'react-icons/go';
import { ImArrowLeft2 } from 'react-icons/im';

import { GlobalPostition, GlobalButton } from '../../styles/GlobalStyles.styled';

export const ModalSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.blackLight};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
  }
  @media (min-width: 768px) {
    width: 583px;
  }
`;

export const Section = styled(GlobalPostition)`
  border-radius: 8px;
  background-color: ${p => p.theme.colors.accent};

  @media (min-width: 320px) and (max-width: 767px) {
    // width: 312px;
    height: 498px;
    padding-top: 82px;
    padding-right: 12px;
    padding-left: 12px;
    padding-bottom: 40px;
    position: relative;
  }

  @media (min-width: 768px) {
    width: 660px;
    padding-top: 110px;
    padding-right: 54px;
    padding-left: 54px;
    padding-bottom: 72px;
  }
`;
export const TextBox = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin-bottom: 116px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  color: #003031;
  text-align: center;
  margin-bottom: 40px;
  color: ${p => p.theme.colors.white};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 29px;
  }
`;

export const TextUp = styled.p`
  font-style: normal;
  font-weight: 400;
  color: ${p => p.theme.colors.background};
  /* text-transform: uppercase; */
  text-align: center;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 34px;
  }
`;

export const Email = styled.span`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ModalBack = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 42px;
    left: 54px;
  }
`;

export const Back = styled(ImArrowLeft2)`
  fill: ${p => p.theme.colors.white};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 42px;
    right: -15px;
  }
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.white};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const BoxBtn = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Btn = styled(GlobalButton)`
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
`;
