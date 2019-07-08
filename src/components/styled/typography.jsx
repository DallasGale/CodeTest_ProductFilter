import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'

export const TypographyHeadingOne = styled.h1`
  font-size: ${pxToRem(18)};
  margin-bottom: 0;
`

export const TypographyHeadingTwo = styled.h2`
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(14)};
`

export const TypographyHeadingThree = styled.h3`
  font-size: ${pxToRem(18)}; 
`
