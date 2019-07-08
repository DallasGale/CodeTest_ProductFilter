import React from 'react'
import axios from 'axios'

import styled from 'styled-components'

import Topbar from '../topbar'
import ProductTile from '../product_tile'

import { pageLoadContentAppear } from '../utils/transitions'

import {
  productApi,
  productCategory,
  productSizeFilterLabel,
  productSizes,
} from '../constants'
import { ScreenTabletDown, ScreenPhoneDown } from '../utils/media'

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
  state = {
    filterSelected: '',
    allProducts: [],
    filteredProducts: [],
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
        filterSelected: value,
      })
    }

    // Show full list of products when the 'select' label is chosen.
    // Could also be used for a 'view all' option.
    if (value === productSizeFilterLabel) {
      this.setState({
        filteredProducts: allProducts,
        filterSelected: value,
      })
    }
  }


  render() {
    const { filteredProducts, filterSelected } = this.state
    return (
      <section>
        <Topbar
          category={productCategory}
          filters={productSizes}
          label={productSizeFilterLabel}
          onChange={this.handleFilterChange}
          value={filterSelected}
        />
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
