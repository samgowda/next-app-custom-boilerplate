import { darken } from 'polished';
import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT } from '../../../styles';

interface ButtonProps {
  size?: string;
  loading?: boolean;
}

export const PrimaryButton = styled.button`
  transition: all 150ms linear;

  // Default button styles
  background: ${COLORS.PRIMARY_CTA_BACKGROUND_COLOR};
  border: 1px solid ${COLORS.PRIMARY_CTA_BORDER_COLOR};
  border-radius: 20px;
  color: ${COLORS.PRIMARY_CTA_TEXT_COLOR};
  cursor: pointer;
  display: inline-block;
  font-family: ${FONTS.PRIMARY_MEDIUM};
  font-size: 14px;
  font-weight: normal;
  height: 40px;
  line-height: 40px;
  padding: 0 ${LAYOUT.GUTTER}px;
  position: relative;
  text-align: center;
  text-decoration: none;
  overflow: hidden;

  // Default Hover State
  &:hover {
    background: ${darken(0.055, COLORS.PRIMARY_CTA_BACKGROUND_COLOR)};
    border-color: ${darken(0.055, COLORS.PRIMARY_CTA_BORDER_COLOR)};
    box-shadow: 0 2px 0 0 rgba(237, 237, 237, 0.6);
  }

  // Medium button overrides
  ${(props: ButtonProps) => props.size === 'medium' ? `
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  ` : ''}

  // Large button overrides
  ${(props: ButtonProps) => props.size === 'large' ? `
    font-size: 16px;
    height: 57px;
    line-height: 57px;
  ` : ''}

  ${(props: ButtonProps) => props.loading ? `
    @keyframes barberpole {
      from { background-position: 0 0; }
      to   { background-position: 101px 0; }
    }

    &:after {
      height: 100%;
      width: 1025px;
      bottom: 0;
      content: '';
      // height: 100%;
      left: 0;
      opacity: 0.3;
      position: absolute;
      right: 0;
      top: 0;
      // width: 100%;

      transition: opacity 0.3s ease;
        background: repeating-linear-gradient(
        -55deg,
        ${COLORS.PRIMARY_ACTIVE_COLOR} 1px,
        ${COLORS.LIGHT_NAVY} 2px,
        ${COLORS.LIGHT_NAVY} 11px,
        ${COLORS.PRIMARY_ACTIVE_COLOR} 12px,
        ${COLORS.PRIMARY_ACTIVE_COLOR} 22px
      );

      animation-name: barberpole;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }` : ''}
`;
