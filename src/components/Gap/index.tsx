import styled from 'styled-components';
import { spacing, width, height, compose, SpacingProps, SizingProps, palette, PaletteProps } from '@material-ui/system';

type GapProps = SpacingProps & SizingProps & PaletteProps;

export const Gap = styled.span<GapProps>`
  display: inline-flex;
  ${compose(palette, spacing, width, height)};
`;
