// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { fontSize, unitCalc, transition } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteA } from '../Elements';

// Icons

// Third party libraries

const StyledTab = styled.div`
  padding: 0;
  flex: 1 0 auto;

  ${props =>
    props.right &&
    css`
      float: right;
    `};
`;
StyledTab.defaultProps = { theme };

const StyledTabTitle = styled(CalciteA)`
  box-sizing: border-box;
  ${fontSize(-2)};
  transition: background ${transition()};
  padding: ${props => unitCalc(props.theme.baseline, 4, '/')}
    ${props => unitCalc(props.theme.baseline, 2, '/')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.palette.offWhite};
  border: 1px solid ${props => props.theme.palette.lighterGray};
  margin-right: -1px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
  }

  &:last-child {
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.white};
    text-decoration: none;
    background-image: linear-gradient(
      to top,
      transparent 94%,
      ${props => props.theme.palette.blue} 96%,
      ${props => props.theme.palette.blue} 100%
    );
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid ${props => props.theme.palette.white};
      background-color: ${props => props.theme.palette.white};

      &:hover {
        background-color: ${props.theme.palette.white};
      }
    `};

    ${props =>
      props.gray &&
      css`
        background-color: ${props => props.theme.palette.white};

        ${props =>
          props.active &&
          css`
            background-color: ${props => props.theme.palette.offWhite};
            border-bottom: 1px solid ${props => props.theme.palette.offWhite};
          `};
      `};

    ${props =>
      props.transparent &&
      css`
        background-color: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
        margin-right: 0;

        &:hover {
          border-bottom: 1px solid ${props => props.theme.palette.lighterGray};
        }

        ${props =>
          props.active &&
          css`
            transition: background ${transition()};
            background-color: transparent;
            border: 1px solid ${props => props.theme.palette.lighterGray};
            border-bottom: 1px solid ${props => props.theme.palette.white};
            border-radius: ${props => props.theme.borderRadius}
              ${props => props.theme.borderRadius} 0 0;

            &:hover {
              border-bottom: 1px solid ${props => props.theme.palette.white};
            }
          `};
      `};

      ${props =>
        props.translucent &&
        css`
          background-color: ${props => props.theme.palette.transparentWhite};
          background-image: none;
          border: none;
          border-top: 2px solid ${props => props.theme.palette.transparentWhite};
          color: ${props => props.theme.palette.offBlack};
          margin-right: 2px;
          margin-bottom: 3px;
          transition: none;

          &:first-child,
          &:last-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }

          &:hover,
          &:focus {
            background-color: ${props => props.theme.palette.opaqueWhite};
            border-top-color: ${props => props.theme.palette.blue};
            background-image: none;
          }

          ${props =>
            props.active &&
            css`
              background-image: none;
              background-color: ${props => props.theme.palette.opaqueWhite};
              border-top-color: ${props => props.theme.palette.blue};
              border-bottom: 2px solid
                ${props => props.theme.palette.opaqueWhite};
              margin-bottom: 0;
            `};
        `};

        ${props =>
          props.dark &&
          css`
            margin-right: 2px;
            margin-bottom: 3px;
            border: none;
            background-color: ${props => props.theme.palette.transparentBlack};
            color: ${props => props.theme.palette.white};
            border-top: 2px solid
              ${props => props.theme.palette.transparentBlack};

            &:hover,
            &:focus {
              color: ${props => props.theme.palette.white};
              background-color: ${props => props.theme.palette.opaqueBlack};
              border-top-color: ${props => props.theme.palette.white};
              background-image: none;
            }

            ${props =>
              props.active &&
              css`
                margin-bottom: 1px;
                background-color: ${props => props.theme.palette.opaqueBlack};
                border-top-color: ${props => props.theme.palette.white};
                border-bottom: 2px solid transparent;
              `};
          `};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
StyledTabTitle.defaultProps = { theme };

const StyledTabNav = styled.nav`
  display: flex;

  &::after {
    display: table;
    content: '';
    clear: both;
  }
`;
StyledTabNav.defaultProps = { theme };

const StyledTabContents = styled.div`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  border-radius: 0 0 ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius};
  margin-top: -1px;

  ${props =>
    props.transparent &&
    css`
      border-bottom: none;
      border-left: none;
      border-right: none;
    `};

  ${props =>
    props.translucent &&
    css`
      border: none;
    `};

  ${props =>
    props.dark &&
    css`
      border: none;
    `};
`;
StyledTabContents.defaultProps = { theme };

const StyledTabSection = styled.article`
  box-sizing: border-box;
  background-color: ${props => props.theme.palette.white};
  padding: ${props => unitCalc(props.theme.baseline, 2, '/')};
  border-radius: 0 0 ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius};

  pre {
    margin: 0;
  }

  ${props =>
    props.gray &&
    css`
      background-color: ${props => props.theme.palette.offWhite};

      pre code {
        padding: 0;
        border: none;
        background-color: transparent;
      }
    `};

  ${props =>
    props.transparent &&
    css`
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
    `};

  ${props =>
    props.translucent &&
    css`
      background-color: ${props => props.theme.palette.opaqueWhite};
    `};

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.palette.opaqueBlack};
      color: ${props => props.theme.palette.white};
    `};
`;
StyledTabSection.defaultProps = { theme };

export {
  StyledTab,
  StyledTabTitle,
  StyledTabNav,
  StyledTabContents,
  StyledTabSection
};
