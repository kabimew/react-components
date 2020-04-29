import styled from 'styled-components';
import {
  spacing,
  width,
  height,
  compose,
  SpacingProps,
  SizingProps,
  breakpoints,
  palette,
  PaletteProps,
} from '@material-ui/system';

type InputProps = SpacingProps & SizingProps & PaletteProps;

export const Input = styled.input<InputProps>`
  ${breakpoints(compose(palette, spacing, width, height))};
`;
