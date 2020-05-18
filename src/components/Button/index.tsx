import styled from 'styled-components';
import { variant } from 'styled-system';
import { Theme } from '../../theme';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
};

export const Button = styled.button<ButtonProps>`
  appearance: none;
  font-family: inherit;
  &:focus {
    outline: none;
  }
  font-weight: ${({ theme }: { theme: Theme }): string => {
    return theme.fontWeights.bold;
  }};
  ${variant({
    prop: 'color',
    scale: 'buttons.colors',
    variants: {},
  })};
  ${variant({
    prop: 'size',
    scale: 'buttons.sizes',
    variants: {},
  })};
`;
