import styled, { css } from 'styled-components';
import { unitCalc, clearfix } from '../utils/helpers';
import { CalciteH4 } from '../Elements';

const StyledPanel = styled.div`
  ${clearfix()};
  background-color: ${props => props.theme.palette.offWhite};
  border: 1px solid ${props => props.theme.palette.lightestGray};
  padding: ${props => unitCalc(props.theme.baseline, 0.66, '*')};
  border-radius: ${props => props.theme.borderRadius};

  code {
    background-color: ${props => props.theme.palette.white};
  }

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.palette.darkestGray};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props.black &&
    css`
      background-color: ${props => props.theme.palette.black};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.offBlack};
    `};

  ${props =>
    props.darkBlue &&
    css`
      background-color: ${props => props.theme.palette.Brand_Blue_250};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.darkerBlue};
    `};

  ${props =>
    props.blue &&
    css`
      background-color: ${props => props.theme.palette.blue};
      color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.darkBlue};
    `};

  ${props =>
    props.lightBlue &&
    css`
      background-color: ${props => props.theme.palette.lightBlue};
      color: ${props => props.theme.palette.black};
      border: 1px solid ${props => props.theme.palette.blue};
    `};

  ${props =>
    props.white &&
    css`
      background-color: ${props => props.theme.palette.white};
      border: 1px solid ${props => props.theme.palette.lightestGray};

      code {
        background-color: ${props => props.theme.palette.offWhite};
      }
    `};

  ${props =>
    props.noBorder &&
    css`
      border: none;
    `};

  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `};
`;

const StyledPanelText = styled.div``;

const StyledPanelTitle = styled(CalciteH4)`
  margin-bottom: 0.775rem;
`;

export { StyledPanel, StyledPanelText, StyledPanelTitle };
