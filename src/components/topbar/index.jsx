import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TypographyHeadingOne } from '../styled/typography'
import { blueLight } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'

import Filter from '../filter'

const StyledTopBar = styled.div`
  background: ${blueLight};
  display: grid;
  grid-template-columns: 50% 50%;
  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};
`

const StyledTopBarFilter = styled.div`
  text-align: right;
`

const Topbar = (props) => {
  const { category } = props
  return (
    <StyledTopBar>
      <TypographyHeadingOne>
        {category}
      </TypographyHeadingOne>
      <StyledTopBarFilter>
        <Filter {...props} />
      </StyledTopBarFilter>
    </StyledTopBar>
  )
}

Topbar.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Topbar
