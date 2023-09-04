import React from 'react'
import MainNavigate from './mainNavigate'
import ProductGroups from './productGroups'

function Nvbr() {
  return (
    <nav className='h-30 flex p-5 flex-col'>
        <MainNavigate/>
        <ProductGroups/>
    </nav>
  )
}

export default Nvbr