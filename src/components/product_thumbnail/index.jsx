import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'


const Image = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-bottom: ${pxToRem(40)};
`

const ProductThumbnail = (props) => {
  const { src, alt } = props
  return (
    <Image src={`./images/${src}`} alt={alt} />
  )
}

ProductThumbnail.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default ProductThumbnail
