import styled from 'styled-components';
import { variant } from 'styled-system';
import { Theme } from '../../theme';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'contained';
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
  border-radius: ${({ theme }: { theme: Theme }): string => {
    return theme.borderRadius.default;
  }};
  cursor: pointer;
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
  ${variant({
    prop: 'variant',
    scale: 'buttons.variants',
    variants: {},
  })};
`;
