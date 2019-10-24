import { darken } from 'polished';
import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT, ORDER } from '../../styles';

// Utils
import { media } from '../../styles/breakpoints';

export const StyledHeader = styled.nav`
  align-items: center;
  background: ${COLORS.HEADER};
  border-bottom: 1px solid ${COLORS.GRAY};
  display: flex;
  height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
  justify-content: space-between;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${ORDER.HEADER};

  ${media.tablet`
    height: ${LAYOUT.HEADERHEIGHT}px;
    justify-content: flex-end;
    padding: 0 ${LAYOUT.GUTTER}px;
  `}
`;

export const StyledLogoLink = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  left: 50%;
  margin-left: -80px;
  position: absolute;
  top: 0;

  ${media.tablet`
    left: ${LAYOUT.GUTTER}px;
    margin-left: 0;
  `}
`;

export const StyledLink = styled.div`
  a {
    align-items: center;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-family: ${FONTS.PRIMARY_MEDIUM};
    height: -webkit-fill-available;
    justify-content: center;
    padding: 0 ${LAYOUT.GUTTER}px;

    img {
      height: 17px;
      padding-left: 10px;
      position: relative;
    }

    ${media.tablet`
      height: ${LAYOUT.HEADERHEIGHT - LAYOUT.GUTTER * 1.5}px;
    `}
  }
`;

export const StyledFavorites = styled.a`
  background: ${COLORS.PRIMARY_CTA_BACKGROUND_COLOR};
  color: ${COLORS.PRIMARY_CTA_TEXT_COLOR};
  max-width: 120px;

  &:hover {
    background: ${darken(0.055, COLORS.PRIMARY_CTA_BACKGROUND_COLOR)};
    border-color: ${darken(0.055, COLORS.PRIMARY_CTA_BORDER_COLOR)};
    box-shadow: 0 2px 0 0 rgba(237, 237, 237, 0.6);
  }

  ${media.tablet`
    border-radius: 20px;
    max-width: none;
  `}

  > span {
    background: ${COLORS.PRIMARY_CTA_TEXT_COLOR};
    border-radius: 10px;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    display: inline-block;
    font-family: ${FONTS.PRIMARY_MEDIUM};
    font-size: 10px;
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
    text-align: center;
    width: 20px;
  }
`;
