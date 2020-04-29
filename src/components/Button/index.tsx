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

type ButtonProps = SpacingProps & SizingProps & PaletteProps;

export const Button = styled.button<ButtonProps>`
  ${breakpoints(compose(palette, spacing, width, height))};
`;
