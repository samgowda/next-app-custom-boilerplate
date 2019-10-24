import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// Utils
import { media } from '../../../styles/breakpoints';

// Constants
import { COLORS, FONTS, LAYOUT, ORDER } from '../../../styles';

injectGlobal`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${COLORS.BODY};
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    font-family: ${FONTS.PRIMARY};
  }

  input, button {
    font-family: ${FONTS.PRIMARY};
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  img {
    border: none;
    outline: none;
  }

  a {
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    text-decoration: none;
  }
`;

export const StyledLayout = styled.div`
  ${(props: { disableFocus: boolean }) => props.disableFocus ? `
    a, button, input {
      outline: none;
    }
  ` : ''}
`;

export const StyledContent = styled.div`
  background-color: ${(props: { backgroundColor?: string }) => props.backgroundColor || 'transparent'};
  > div {
    margin: 0 auto 0;
    padding-top: ${LAYOUT.MOBILE_HEADERHEIGHT}px;

    ${media.tablet`
      padding-top: ${LAYOUT.HEADERHEIGHT}px;
    `}

    @media print {
      padding-top: 20px;
    }
  }
`;

export const AccessibilityAid = styled.a`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  &:focus {
    top: 0;
    z-index: ${ORDER.SKIP_TO_CONTENT};
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    padding: 0 10px;
    clip: auto;
    font-weight: bold;
    line-height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    text-decoration: none;
    width: auto;

    ${media.tablet`
      height: ${LAYOUT.HEADERHEIGHT}px;
      line-height: ${LAYOUT.HEADERHEIGHT}px;
    `}
  }
`;
