import styled from 'styled-components';
import { variant } from 'styled-system';

type ButtonProps = {
  color?: 'primary' | 'secondary';
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
        color: 'white',
        backgroundColor: 'primary',
        '&:hover': {
          backgroundColor: 'red',
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: 'secondary',
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
