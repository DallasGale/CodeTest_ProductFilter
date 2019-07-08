import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { pageLoadContentAppear } from '../utils/transitions'
import pxToRem from '../utils/px_to_rem'
import { ScreenTabletLandscapeDown, ScreenSmallDeviceDown } from '../utils/media'

import ContentWrapper from './content_wrapper'


const StyledPage = styled.div`

  opacity: 0;
  background: 'transparent';
  animation: ${pageLoadContentAppear} 0.5s ease forwards;
  padding: 0 ${pxToRem(60)};
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  max-width: '1850px';
  margin: 0 auto;
  z-index: 2;

  @media ${ScreenTabletLandscapeDown} {
    padding: 0 ${pxToRem(60)};
    position: relative;
    min-height: auto;
  }

  @media ${ScreenSmallDeviceDown} {
    padding: 0 ${pxToRem(20)};
  }
`

const Page = (props) => {
  const { children, fullWidth } = props

  const [mounting, setMounting] = useState()

  useEffect(() => {
    setMounting(true)
  }, [])

  return (
    <StyledPage isMounting={mounting} fullWidth={fullWidth}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledPage>
  )
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
}

export default Page
