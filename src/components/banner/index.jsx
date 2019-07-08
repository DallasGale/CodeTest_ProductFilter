import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, red, white } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'

import { exclusiveLabel, saleLabel } from '../constants'

const StyledBanner = styled.div`
  background: ${props => props.background};
  color: ${white};
  display: inline-block;
  font-size: ${pxToRem(8)};
  padding: ${pxToRem(2)} ${pxToRem(15)};
  text-align: center;
  width: auto;
`

const Banner = (props) => {
  const { isExclusive, isSale } = props
  if (isExclusive) return <StyledBanner background={green}>{exclusiveLabel}</StyledBanner>
  if (isSale) return <StyledBanner background={red}>{saleLabel}</StyledBanner>
  return null
}

Banner.propTypes = {
  isSale: PropTypes.bool,
  isExclusive: PropTypes.bool,
}

Banner.defaultProps = {
  isSale: false,
  isExclusive: false,
}

export default Banner
