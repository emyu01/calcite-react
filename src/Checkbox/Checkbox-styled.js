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
import styled from 'styled-components';

// Utils, common elements
import { fontSize, unitCalc } from '../utils/helpers';
import { baseRadioCheckbox } from '../utils/commonElements';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components

// Icons

// Third party libraries

const StyledCheckbox = styled(baseRadioCheckbox)`
  -webkit-appearance: checkbox;
  margin-right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  cursor: pointer;
`;
StyledCheckbox.defaultProps = { theme };

const StyledCheckboxLabel = styled.span`
  ${fontSize(-1)};
  color: ${props => props.theme.palette.darkestGray};
  width: auto;
  margin-right: ${props => props.theme.baseline};
  cursor: pointer;
`;
StyledCheckboxLabel.defaultProps = { theme };
const StyledCheckboxGroup = styled.label`
  display: flex;
  align-items: center;
`;
StyledCheckboxGroup.defaultProps = { theme };

export { StyledCheckbox, StyledCheckboxLabel, StyledCheckboxGroup };
