import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT, ORDER } from '../../styles';
import { media } from '../../styles/breakpoints';

export const StyledToastLayout = styled.div`
  background-color:${(props: { status?: string }) => props.status !== 'error' ? COLORS.PRIMARY_ACTIVE_COLOR : COLORS.ERROR_RED};
  display: block;
  padding: ${LAYOUT.GUTTER / 2}px ${LAYOUT.GUTTER * 2}px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: ${ORDER.TOAST};

  ${media.tablet`
    padding: 15px ${LAYOUT.GUTTER * 2}px;
  `}
`;

export const ToastContent = styled.div`
  color: white;
  font-family: ${FONTS.PRIMARY_MEDIUM};
  font-size: 12px;
  position: relative;
  top: 2px;
  text-align: center;

  ${media.tablet`
    font-size: ${FONTS.PRIMARY_TEXT_SIZE}px;
  `}
`;

export const StyledForceDismiss = styled.div`
  display: block;
  position: absolute;
  top: 9px;
  right: ${LAYOUT.GUTTER / 2}px;
  cursor: pointer;

  ${media.tablet`
    top: 16px;
    right: ${LAYOUT.GUTTER}px;
  `}
`;
