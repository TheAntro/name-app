import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Total = ({ total }) => 
  total !== null && total !== 0 && (
    <div className='total'>
      <h2>Nimien yhteismäärä: { total }</h2>
    </div>
  )
  
Total.propTypes = {
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  total: state.total
})

export default connect(mapStateToProps)(Total)
