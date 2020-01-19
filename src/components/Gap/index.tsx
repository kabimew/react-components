import styled from 'styled-components';
import { spacing, width, height, compose, SpacingProps, SizingProps } from '@material-ui/system';

type GapProps = SpacingProps & SizingProps;

const Gap = styled.span<GapProps>`
  display: inline-flex;
  ${compose(spacing, width, height)};
`;

export default Gap;
