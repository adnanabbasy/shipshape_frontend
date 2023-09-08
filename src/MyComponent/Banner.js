import React from 'react'
import Search from './Search'
const Banner = () => {
  return (
    <div className='main-banner'>
      <div className='container-fluid'>
        <div className='banner-form'>
          <h1>Find a marine service technician near you</h1>
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Banner
