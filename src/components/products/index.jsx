import React from 'react'
import axios from 'axios'

import styled from 'styled-components'

import Filter from '../filter'
import ProductTile from '../product_tile'

import { blueLight } from '../styles/colors'

import { TypographyHeadingOne } from '../styled/typography'

import { pageLoadContentAppear } from '../utils/transitions'

import {
  productSizeFilterLabel,
  productSizes,
  productApi,
} from '../constants'
import pxToRem from '../utils/px_to_rem'
import { ScreenTabletDown, ScreenPhoneDown } from '../utils/media'

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

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  opacity: 0;
  animation: ${pageLoadContentAppear} 0.5s ease 0.4s forwards;
  
  @media ${ScreenTabletDown} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${ScreenPhoneDown} {
    grid-template-columns: repeat(1, 1fr);
  }
`

class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      filteredValue: '',
      allProducts: [],
      filteredProducts: [],
    }
  }


  // Fetch the api here and initialise product state...
  componentDidMount() {
    axios.get(productApi)
      .then((response) => {
        const { data } = response
        return (
          this.setState({
            allProducts: data,
            filteredProducts: data,
          })
        )
      })
  }

  // Change handler for the size filtering...
  handleFilterChange = (e) => {
    const { allProducts } = this.state
    const { value } = e.target

    const filteredList = allProducts.filter(item => item.size.includes(value))

    // Update products to display filtered sizes...
    if (filteredList) {
      this.setState({
        filteredProducts: filteredList,
        filteredValue: value,
      })
    }

    // Show full list of products when the 'select' label is chosen.
    // Could also be used for a 'view all' option.
    if (e.target.value === productSizeFilterLabel) {
      this.setState({
        filteredProducts: allProducts,
        filteredValue: value,
      })
    }
  }


  render() {
    const { filteredProducts, filteredValue } = this.state
    return (
      <section>
        <StyledTopBar>
          <TypographyHeadingOne>Women's Tops</TypographyHeadingOne>
          <StyledTopBarFilter>
            <Filter
              filters={productSizes}
              label={productSizeFilterLabel}
              onChange={this.handleFilterChange}
              value={filteredValue}
            />
          </StyledTopBarFilter>
        </StyledTopBar>
        <StyledProductGrid>
          {
            filteredProducts.map((product) => {
              const {
                isExclusive,
                isSale,
                productImage,
                productName,
                size,
                price,
              } = product
              console.log(isExclusive, isSale)
              return (
                <ProductTile
                  isExclusive={isExclusive}
                  isSale={isSale}
                  key={productName}
                  image={productImage}
                  name={productName}
                  price={price}
                  size={size}
                />
              )
            })
          }
        </StyledProductGrid>
      </section>
    )
  }
}

export default Products
