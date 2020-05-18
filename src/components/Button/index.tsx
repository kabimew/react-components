import styled from 'styled-components';
import { color, ColorProps, compose } from 'styled-system';

type ButtonProps = ColorProps;

export const Button = styled.button<ButtonProps>`
  ${compose(color)};
`;
