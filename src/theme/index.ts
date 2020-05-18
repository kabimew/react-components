import { buttons } from './buttons';
import { space } from './space';
import { lineHeights } from './lineHeights';
import { letterSpacings } from './letterSpacings';
import { fontWeights } from './fontWeights';
import { fontSizes } from './fontSizes';
import { colors } from './colors';
import { borderRadius } from './borderRadius';

export const theme = {
  colors,
  buttons,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  space,
  borderRadius,
};

export type Theme = typeof theme;
