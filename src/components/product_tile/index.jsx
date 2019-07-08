import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import * as colors from '../styles/colors'
import { TypographyHeadingTwo, TypographyHeadingThree } from '../styled/typography'

import { productImagePlaceholder } from '../constants'
import pxToRem from '../utils/px_to_rem'

import ProductThumbnail from '../product_thumbnail'
import Banner from '../banner'


const StyledBannerRow = styled.div`
  margin-bottom: ${pxToRem(10)};
  min-height: ${pxToRem(28)};
`

const StyledDetailsRow = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

const StyledTile = styled.article`
  border: 1px solid ${colors.grayMedium};
  padding: ${pxToRem(10)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 1s;
`

const StyledPrice = styled(TypographyHeadingThree)`
  text-align: right;
`
const ProductTile = (props) => {
  // Below hooks are for css transition purposes when the
  // product visibilty is on/off due to filtering.
  const [visible, setVisibile] = useState(false)
  useEffect(() => {
    setVisibile(true)
    return () => {
      setVisibile(false)
    }
  }, [])

  const {
    image,
    name,
    price,
  } = props
  return (
    <StyledTile visible={visible}>
      <ProductThumbnail src={image} alt={name} />
      <StyledBannerRow>
        <Banner {...props} />
      </StyledBannerRow>
      <StyledDetailsRow>
        <TypographyHeadingTwo>{name}</TypographyHeadingTwo>
        <StyledPrice>{price}</StyledPrice>
      </StyledDetailsRow>
    </StyledTile>
  )
}

ProductTile.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  image: PropTypes.string,
}

ProductTile.defaultProps = {
  price: 'TBC',
  image: productImagePlaceholder,
}

export default ProductTile
