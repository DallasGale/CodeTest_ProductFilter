import React from 'react'
import PropTypes from 'prop-types'

// Re-usable filter component

const Filter = (props) => {
  const {
    filters,
    label,
    onChange,
    value,
  } = props
  return (
    <form>
      <label aria-label={label}>
        <select value={value} onChange={onChange}>
          <option value={label}>{label}</option>
          {
            filters.map(filter => <option key={filter} value={filter}>{filter}</option>)
          }
        </select>
      </label>
    </form>
  )
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

Filter.defaultProps = {
  label: null,
}

export default Filter
