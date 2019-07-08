import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { ScreenSmallDeviceDown } from '../utils/media';

// Used mainly inside a <Page /> component to give padding
// without stretching the height

const StyledContent = styled.section`

  padding-top: ${pxToRem(60)};
  width: 100%;

  @media ${ScreenSmallDeviceDown} {
    padding-top: ${pxToRem(100)};
  }
`

const ContentWrapper = (props) => {
  const { children } = props
  return (
    <StyledContent>
      {children}
    </StyledContent>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentWrapper
