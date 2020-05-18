import styled from 'styled-components';
import { color, ColorProps, compose } from 'styled-system';

type InputProps = ColorProps;

export const Input = styled.input<InputProps>`
  ${compose(color)};
`;
