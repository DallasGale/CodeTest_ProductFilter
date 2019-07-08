import React from 'react'
import styled from 'styled-components'

import { green, red, white } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'

import {
  exclusiveLabel,
  saleLabel,
} from '../constants'


const StyledBanner = styled.div`
  color: ${white};
  display: inline-block;
  font-size: ${pxToRem(8)};
  padding: ${pxToRem(2)} ${pxToRem(15)};
  text-align: center;
  width: auto;
`

const StyledExclusive = styled(StyledBanner)`
  background: ${green};

`
const StyledSale = styled(StyledBanner)`
  background: ${red};
`

const ExclusiveBanner = () => <StyledExclusive>{exclusiveLabel}</StyledExclusive>
const SaleBanner = () => <StyledSale>{saleLabel}</StyledSale>

const Banner = (props) => {
  const { isExclusive, isSale } = props
  if (isExclusive) return <ExclusiveBanner />
  if (isSale) return <SaleBanner />
  return null
}

export default Banner
