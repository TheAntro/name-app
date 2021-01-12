import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Total = ({ total }) => 
  total !== null && total !== 0 && (
    <div className='total'>
      <p>Nimien yhteismäärä: { total }</p>
    </div>
  )
  
Total.propTypes = {
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  total: state.total
})

export default connect(mapStateToProps)(Total)
