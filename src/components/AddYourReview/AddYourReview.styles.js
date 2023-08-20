import styled from 'styled-components';

import { GlobalButton, GlobalPostition } from '../../styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';
import { ImArrowLeft2 } from 'react-icons/im';
// import { MdAddAPhoto } from 'react-icons/md';

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
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
    height: 498px;
    padding-top: 82px;
    padding-right: 12px;
    padding-left: 12px;
    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    width: 583px;
    padding-top: 82px;
    padding-right: 54px;
    padding-left: 54px;
    padding-bottom: 72px;
  }
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
  fill: ${p => p.theme.colors.main};

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
    // width: 20px;
    // height: 20px;
  }
  @media (min-width: 768px) {
    top: 42px;
    right: 54px;
  }
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  color: #003031;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 34px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 767px) {
    gap: 12px;
    width: 252px;
  }

  @media (min-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`;

export const Input = styled.input`
  background-color: rgba(99, 71, 137, 0.1);
  border: 1px solid #003031;
  border-radius: 8px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 36px;
    padding-left: 8px;

    ::placeholder {
      color: #634789;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      font-family: Morgrach sans-serif;
    }
  }
  @media (min-width: 768px) {
    height: 50px;
    padding-left: 20px;

    ::placeholder {
      color: #634789;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      font-family: Morgrach sans-serif;
    }
  }
`;

export const Message = styled.textarea`
  border-radius: 8px;
  border: 1px solid #003031;
  background-color: rgba(99, 71, 137, 0.1);
  position: relative;
  width: 100%;
  resize: none;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 8px;
    margin-bottom: 35px;
    height: 150px;
  }
  @media (min-width: 768px) {
    height: 193px;
    margin-bottom: 65px;
    padding-top: 13px;
    padding-left: 20px;
  }

  ::placeholder {
    color: #634789;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    resize: none;
  }
`;

// export const IconPhoto = styled(MdAddAPhoto)`
//   color: #003031;
//   transform: scaleX(-1);

//   @media (min-width: 320px) and (max-width: 767px) {
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     bottom: 125px;
//     right: 38px;
//   }
//   @media (min-width: 768px) {
//     width: 25px;
//     height: 25px;
//     position: absolute;
//     bottom: 215px;
//     right: 70px;
//   }
// `;

export const ButtonForm = styled(GlobalButton)`
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 250px;
  }
  @media (min-width: 768px) {
    width: 334px;
  }
`;
