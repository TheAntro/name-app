import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Names = ({ names }) => 
  names !== null && names.length > 0 && names.map(item => (
    <div key={item.name} className='names'>
      <p>{ item.name }: { item.amount} </p>
    </div>
  ))
Names.propTypes = {
  names: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  names: state.names
})

export default connect(mapStateToProps)(Names)
