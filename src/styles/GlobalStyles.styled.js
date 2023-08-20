import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyled = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.backgroundWhite};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0; padding: 0;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .modal-open {
    overflow: hidden;
  }
  .menu-open {
    overflow: hidden;
  }
`;

const GlobalLayout = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100vh;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

const GlobalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 130px;
  }
  overflow: hidden;
`;

const GlobalPostition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GlobalTitleText = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.keks};
  font-weight: 400;

  text-transform: uppercase;

  color: ${p => p.theme.colors.main};
`;

const GlobalText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 19px;

  color: ${p => p.theme.colors.backgroundWhite};
`;

const GlobalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 300px;

  padding: 13px 0 12px 0;

  border-radius: ${p => p.theme.radii.normal};

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.keks};

  text-align: center;
  text-transform: uppercase;

  outline: none;
  border: 1px solid white;

  color: ${p => p.theme.colors.background};
  background-color: ${p => p.theme.colors.accent};

  filter: drop-shadow(3px 8px 20px rgba(177, 27, 13, 0.1));

  cursor: pointer;

  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:is(:hover) {
    background-color: ${p => p.theme.colors.white};
    border: 1px solid #003031;
    color: ${p => p.theme.colors.accent};
  }
`;

export {
  GlobalLayout,
  GlobalStyled,
  GlobalPostition,
  GlobalText,
  GlobalTitleText,
  GlobalSection,
  GlobalButton,
};
