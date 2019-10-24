import styled from 'styled-components';
import { FONTS } from '../../../styles';

export const StyledInput = styled.input`
  background: #f7f7f8;
  border: none;
  display: block;
  font-size: ${FONTS.PRIMARY_TEXT_SIZE}px;
  flex-basis: 66.66%;
  height: ${(props: { height: number }) => props.height}px;
  padding: 2px 30px 0 30px;
  width: 100%;
`;

interface Icon {
  height: number;
  iconSrc: string;
}

export const StyledIcon = styled.div`
  background-image: url(${(props: Icon) => props.iconSrc});
  background-position: 10px center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 2px;
  height: ${(props: Icon) => props.height}px;
  width: 30px;
`;
