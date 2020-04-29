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

type GapProps = SpacingProps & SizingProps & PaletteProps;

export const Gap = styled.span<GapProps>`
  display: inline-flex;
  ${breakpoints(compose(palette, spacing, width, height))};
`;
