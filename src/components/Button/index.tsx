import styled from 'styled-components';
import { variant } from 'styled-system';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
};

export const Button = styled.button<ButtonProps>`
  appearance: none;
  font-family: inherit;
  &:focus {
    outline: none;
  }
  ${variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'primary.contrastText',
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      },
      secondary: {
        color: 'secondary.contrastText',
        backgroundColor: 'secondary.main',
        '&:hover': {
          backgroundColor: 'secondary.dark',
        },
      },
      success: {
        color: 'success.contrastText',
        backgroundColor: 'success.main',
        '&:hover': {
          backgroundColor: 'success.dark',
        },
      },
      info: {
        color: 'info.contrastText',
        backgroundColor: 'info.main',
        '&:hover': {
          backgroundColor: 'info.dark',
        },
      },
      warning: {
        color: 'warning.contrastText',
        backgroundColor: 'warning.main',
        '&:hover': {
          backgroundColor: 'warning.dark',
        },
      },
      error: {
        color: 'error.contrastText',
        backgroundColor: 'error.main',
        '&:hover': {
          backgroundColor: 'error.dark',
        },
      },
    },
  })};
  ${variant({
    prop: 'size',
    variants: {
      small: {
        px: 2,
      },
      medium: {
        px: 4,
      },
    },
  })};
`;
