import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.section`

  margin: 0 auto;
  width: 100%;
`

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <StyledContent>
        <main>{children}</main>
      </StyledContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
