import styled from 'styled-components'
import { black, white, red } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'

import { transitionPt1, transitionPt2 } from '../utils/transitions'
import { ScreenPhoneDown } from '../utils/media';

export const PrimaryButton = styled.button`

  background: ${black};
  border: 1px solid ${white};
  cursor: pointer;
  color: ${white};
  font-size: ${pxToRem(20)};
  font-weight: 600;
  margin-left: ${pxToRem(20)};
  padding: ${pxToRem(10)} ${pxToRem(20)};
  text-decoration: none;
  float: ${props => (props.pullRight ? 'right' : 'auto')};
  ${transitionPt1};

  &:hover {
    filter: invert(1);
    ${transitionPt2};
  }
`

export const SecondaryButton = styled(PrimaryButton)`

  background: ${red};
  border: none;
  &:hover {
    filter: none;
    background: ${white};
    color: ${black};
  }
`

export const LargeCtaLink = styled.a`

  background: ${black};
  border: 0;
  color: ${white};
  font-size: ${pxToRem(20)};
  font-weight: 600;
  letter-spacing: ${pxToRem(0)};
  margin-left: ${pxToRem(20)};
  padding: ${pxToRem(15)} ${pxToRem(25)};
  text-decoration: none;
  ${transitionPt1};

  @media ${ScreenPhoneDown} {
    background: ${red};
    display: block;
    text-align: center;
  }

  &:hover {
    background: ${red};
    ${transitionPt2};
  }
`
