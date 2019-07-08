import { rootFontSize } from '../styles/fonts'

/**
 * Convert a raw px number to its value in rem, represented as a string.
 * ex: pxToRem(10) = '.71428rem'
 */
const pxToRem = pxValue => `${parseFloat((pxValue / rootFontSize).toFixed(5))}rem`

export default pxToRem
